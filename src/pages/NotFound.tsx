import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const NotFound = () => (
  <main className="min-h-screen frosted-glass-bg">
    <Header />
    <section className="relative pt-40 pb-32">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">Page not found</h1>
        <p className="text-lg text-muted-foreground mb-8">This page doesn't exist, or it has moved.</p>
        <Link to="/" className="text-primary underline underline-offset-4 hover:text-accent">
          Back to the homepage
        </Link>
      </div>
    </section>
    <Footer />
  </main>
);

export default NotFound;
