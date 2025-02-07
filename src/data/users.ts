export type User = {
    id: string; // Ensure ID is a string if using crypto.randomUUID()
    name: string;
    email: string;
    password: string;
  };
  
  export const usersInfo: User[] = [
    { id: "1", name: "John Doe", email: "john@example.com", password: "hashedpassword123" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", password: "hashedpassword456" }
  ];
  