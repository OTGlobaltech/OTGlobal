// components/forms/BookMeetingForm.jsx
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function BookMeetingForm({ onSuccess }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/book-meeting", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Something went wrong");
            }

            toast.success("Meeting request submitted! We'll contact you soon.");
            reset();
            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                    id="name"
                    placeholder="John Doe"
                    {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                    <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
                    })}
                />
                {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="company">Company Name</Label>
                <Input
                    id="company"
                    placeholder="Your Company Ltd."
                    {...register("company", { required: "Company name is required" })}
                />
                {errors.company && (
                    <p className="text-sm text-red-500">{errors.company.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    {...register("phone")}
                />
            </div>

            <div className="space-y-2">
                <Label htmlFor="message">What would you like to discuss?</Label>
                <Textarea
                    id="message"
                    placeholder="Tell us about your sourcing needs, product requirements, or any questions you have..."
                    rows={4}
                    {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                    <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
            </div>

            <Button
                type="submit"
                className="w-full bg-[#00A896] hover:bg-[#008c7a]"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
        </form>
    );
}
