import {
    Html,
    Head,
    Body,
    Container,
    Img,
    Text,
    Section,
    Font
} from "@react-email/components";

interface EmailProps {
    name: string;
    email: string;
    whatsapp: string;
    service: string;
    message: string;
}

const headerText = {
    fontFamily: 'Poppins, Arial, sans-serif',
    color: "#544BC2",
    fontSize: "22px",
    fontWeight: "bold",
    marginTop: "10px",
};

const infoSection = {
    fontFamily: 'Poppins, Arial, sans-serif',
    marginTop: "10px",
};

const infoCard = {
    fontFamily: 'Poppins, Arial, sans-serif',
    backgroundColor: "#F8F8FF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "16px",
    marginBottom: "12px",
    textAlign: "left" as const,
};

const infoItem = {
    fontFamily: 'Poppins, Arial, sans-serif',
    fontSize: "14px",
    color: "#333",
    lineHeight: "1.6",
    margin: "6px 0",
    textAlign: "left" as const,
};

const infoLabel = {
    fontFamily: 'Poppins, Arial, sans-serif',
    color: "#544BC2",
    textAlign: "left" as const,
};

const messageCard = {
    fontFamily: 'Poppins, Arial, sans-serif',
    backgroundColor: "#FFFFFF",
    border: "1px solid #E5E7EB",
    borderRadius: "8px",
    padding: "16px",
    marginTop: "10px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
    textAlign: "left" as const,
};

const messageText = {
    fontFamily: 'Poppins, Arial, sans-serif',
    color: "#333",
    fontSize: "15px",
    lineHeight: "1.8",
    marginTop: "12px",
    textAlign: "left" as const,
};

export default function UserEmail({ name, email, whatsapp, service, message }: EmailProps) {
    return (
        <Html>
            <Head>
                <Font
                    fontFamily="Poppins"
                    fallbackFontFamily="Arial"
                    webFont={{
                        url: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Body
                style={{
                    margin: 0,
                    padding: 0,
                    fontFamily: 'Poppins, Arial, sans-serif',
                    backgroundColor: "#ffff",
                    color: "#fff",
                    backgroundImage: `
            linear-gradient(to right, #E5E7EB6E 1.5px, transparent 1px),
            linear-gradient(to bottom, #E5E7EB6E 1.5px, transparent 1px)
          `,
                    backgroundSize: "120px 120px",
                    WebkitMaskImage: `
            radial-gradient(circle at top left, transparent 0%, transparent 5%, black 26%),
            radial-gradient(circle at bottom left, transparent 0%, transparent 5%, black 26%)
          `,
                    WebkitMaskComposite: "source-in",
                    maskComposite: "intersect",
                }}
            >
                <Container
                    style={{
                        maxWidth: "600px",
                        margin: "0 auto",
                        // backgroundColor: "#544BC2",
                        borderRadius: "16px",
                        padding: "40px",
                        textAlign: "center",
                        fontFamily: 'Poppins, Arial, sans-serif',
                    }}
                >
                    <Section>
                        <Img
                            src="https://res.cloudinary.com/dyrleuyj9/image/upload/v1761964331/ICOWEB_Logo_4_jn56hq.png" // 🔁 Replace with your logo URL
                            width="100"
                            height="31"
                            alt="Project Logo"
                            style={{ margin: "0 auto 20px auto", backgroundColor: "#544BC2", padding: "10px", borderRadius: "10px" }}
                        />
                        <Text style={headerText}>Client Inquiry</Text>
                    </Section>

                    <Section style={infoSection}>

                        <Section style={infoCard}>
                            <Text style={infoItem}>
                                <strong style={infoLabel}>Name:</strong> {name}
                            </Text>
                            <Text style={infoItem}>
                                <strong style={infoLabel}>Email:</strong> {email}
                            </Text>
                            <Text style={infoItem}>
                                <strong style={infoLabel}>WhatsApp Number:</strong> {whatsapp}
                            </Text>
                            <Text style={infoItem}>
                                <strong style={infoLabel}>Service:</strong> {service}
                            </Text>
                        </Section>

                        <Section style={messageCard}>
                            <Text style={infoLabel}>Message</Text>
                            <Text style={messageText}>{message}</Text>
                        </Section>
                    </Section>

                    {/* Footer */}
                    <Text
                        style={{
                            fontSize: "14px",
                            color: "#999",
                            marginTop: "40px",
                        }}
                    >
                        © 2023 Your Icoweb Agency. All rights reserved.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}
