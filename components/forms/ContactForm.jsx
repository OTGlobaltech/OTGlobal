"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
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
            const response = await fetch("/api/contact", {
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

            toast.success("Message sent! We'll be in touch soon.");
            reset();
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                        id="name"
                        placeholder="John Doe"
                        {...register("name", { required: "Name is required" })}
                    />
                    {errors.name && (
                        <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                    )}
                </div>
                <div>
                    <Label htmlFor="email">Email *</Label>
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
                        <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                    )}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                        id="company"
                        placeholder="Your Company Ltd."
                        {...register("company")}
                    />
                </div>
                <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        {...register("phone")}
                    />
                </div>
            </div>
            <div>
                <Label htmlFor="subject">Subject *</Label>
                <Input
                    id="subject"
                    placeholder="How can we help?"
                    {...register("subject", { required: "Subject is required" })}
                />
                {errors.subject && (
                    <p className="text-sm text-red-500 mt-1">{errors.subject.message}</p>
                )}
            </div>
            <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                    id="message"
                    rows={6}
                    placeholder="Tell us about your supply chain needs..."
                    {...register("message", { required: "Message is required" })}
                />
                {errors.message && (
                    <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                )}
            </div>
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00A896] hover:bg-[#008c7a] text-white"
            >
                {isSubmitting ? (
                    "Sending..."
                ) : (
                    <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                    </>
                )}
            </Button>
        </form>
    );
}
