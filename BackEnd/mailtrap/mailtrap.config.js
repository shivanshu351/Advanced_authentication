import { MailtrapClient } from "mailtrap"

const TOKEN = "260e94c155783036da1d889d8891329e";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Mailtrap Test",
};
export const recipients = [
  {
    email: "shivanshusingh71@gmail.com",
  }
];

