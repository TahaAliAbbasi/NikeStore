"use server";

const handleSubmitForm = async (_prevState: unknown, formData: FormData) => {
    try {
        const fields = {
            name: formData.get("name"),
            email: formData.get("email"),
            password: formData.get("password")
        };

        const response = await fetch("http://localhost:3000/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fields)
        });

        const data = await response.json();

        if (!response.ok) {
            return { success: false, message: data.message || "Signup failed", error: true };
        }

        return { success: true, message: data.message || "Signup successful", error: false };
    } catch (error) {
        console.error("Signup Error:", error);
        return { success: false, message: error instanceof Error ? error.message : "An unknown error occurred", error: true };
    }
};

export default handleSubmitForm;
