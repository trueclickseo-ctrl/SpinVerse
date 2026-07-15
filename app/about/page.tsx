import React from "react";
import Link from "next/link";
import { ArrowLeft, Info, Shield, CheckCircle } from "lucide-react";

export const metadata = {
  title: "About Us - My PDF Image",
  description: "Learn how My PDF Image provides 100% free, private local document tools and image resizers directly inside your web browser.",
};

export default function AboutPage() {
  return (
    <div style={styles.page}>
      <div className="container" style={styles.container}>
        <Link href="/" style={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>

        <div style={styles.header}>
          <div style={styles.iconWrapper}>
            <Info size={24} color="#ffffff" />
          </div>
          <h1 style={styles.title}>About My PDF Image</h1>
          <p style={styles.subtitle}>Factual, transparent, and secure browser-based tools designed for modern utility.</p>
        </div>

        <div style={styles.card} className="glass-card">
          <h2>1. Who We Are</h2>
          <p style={styles.paragraph}>
            My PDF Image is a next-generation utility platform designed to solve daily file conversions and image resizing needs with absolute speed and privacy. We believe that simple operations—like scaling a photo to exactly 20KB for a recruitment portal or merging two PDF pages—should not require uploading sensitive personal documents to third-party cloud servers.
          </p>

          <h2>2. The Local-First Privacy Model</h2>
          <p style={styles.paragraph}>
            All core processing operations run directly in your web browser utilizing WebAssembly and modern client-side engines. When you drag and drop a file, it remains inside your computer's RAM. 
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", margin: "24px 0" }}>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <CheckCircle size={18} color="var(--accent-primary)" />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-primary)" }}>No Cloud Uploads: Your file data remains 100% local.</span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <CheckCircle size={18} color="var(--accent-primary)" />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-primary)" }}>Zero Registration: Use all tools instantly without creating an account.</span>
            </div>
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
              <CheckCircle size={18} color="var(--accent-primary)" />
              <span style={{ fontSize: "14px", fontWeight: "600", color: "var(--text-primary)" }}>Stripe-Fast Performance: Processing completes in milliseconds.</span>
            </div>
          </div>

          <h2>3. Support & Feedback</h2>
          <p style={styles.paragraph}>
            We continuously refine our compression algorithms to ensure visual fidelity while staying strictly within target file-size limits. If you have any suggestions, bug reports, or feature requests, feel free to contact our support team at trueclickseo@gmail.com or through our online <Link href="/contact" style={{ color: "var(--accent-primary)", fontWeight: "600" }}>Contact Us</Link> form.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  page: {
    padding: "60px 0 80px 0",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  backLink: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    textDecoration: "none",
    color: "var(--text-secondary)",
    fontSize: "14px",
    fontWeight: "500",
    transition: "color var(--transition-fast)",
  },
  header: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
  },
  iconWrapper: {
    background: "linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)",
    borderRadius: "12px",
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 20px rgba(79, 70, 229, 0.3)",
    marginBottom: "8px",
  },
  title: {
    fontSize: "32px",
    fontWeight: "800",
    color: "var(--text-primary)",
    margin: 0,
  },
  subtitle: {
    fontSize: "16px",
    color: "var(--text-secondary)",
    margin: 0,
    maxWidth: "600px",
  },
  card: {
    padding: "32px",
    textAlign: "left",
  },
  paragraph: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "var(--text-secondary)",
    marginBottom: "20px",
  },
};
