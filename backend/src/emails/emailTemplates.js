export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to KimChi Chat</title>
  </head>
  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
    <div style="background: linear-gradient(to right, #e64a2e, #ff775d); padding: 30px; text-align: center; border-radius: 12px 12px 0 0;">
      <img src="https://cdn-icons-png.flaticon.com/512/5053/5053913.png" alt="KimChi Chat Logo" style="width: 80px; height: 80px; margin-bottom: 20px; border-radius: 50%; background-color: white; padding: 10px;">
      <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 500;">Welcome to KimChi Chat!</h1>
    </div>
    <div style="background-color: #ffffff; padding: 35px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
      <p style="font-size: 18px; color: #e64a2e;"><strong>Hello ${name},</strong></p>
      <p>We're excited to have you join our messaging platform! KimChi Chat connects you with friends, family, and colleagues in real-time spicy conversations, no matter where they are.</p>
      
      <div style="background-color: #f8f9fa; padding: 25px; border-radius: 10px; margin: 25px 0; border-left: 4px solid #e64a2e;">
        <p style="font-size: 16px; margin: 0 0 15px 0;"><strong>Get started in just a few steps:</strong></p>
        <ul style="padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 10px;">Set up your profile picture</li>
          <li style="margin-bottom: 10px;">Find and add your contacts</li>
          <li style="margin-bottom: 10px;">Start a spicy chat room</li>
          <li style="margin-bottom: 0;">Share photos, text messages, and sound vibes</li>
        </ul>
      </div>
      
      <div style="text-align: center; margin: 30px 0;">
        <a href=${clientURL} style="background: linear-gradient(to right, #e64a2e, #ff775d); color: white; text-decoration: none; padding: 12px 30px; border-radius: 50px; font-weight: 500; display: inline-block;">Open KimChi Chat</a>
      </div>
      
      <p style="margin-bottom: 5px;">If you need any help or have questions, we're always here to assist you.</p>
      <p style="margin-top: 0;">Happy chatting!</p>
      
      <p style="margin-top: 25px; margin-bottom: 0;">Best regards,<br>The KimChi Chat Team</p>
    </div>
    
    <div style="text-align: center; padding: 20px; color: #999; font-size: 12px;">
      <p>© 2026 KimChi Chat. All rights reserved.</p>
      <p>
        <a href="#" style="color: #e64a2e; text-decoration: none; margin: 0 10px;">Privacy Policy</a>
        <a href="#" style="color: #e64a2e; text-decoration: none; margin: 0 10px;">Terms of Service</a>
        <a href="#" style="color: #e64a2e; text-decoration: none; margin: 0 10px;">Contact Us</a>
      </p>
    </div>
  </body>
  </html>
  `;
}
