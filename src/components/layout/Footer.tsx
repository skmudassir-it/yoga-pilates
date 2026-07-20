import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpa } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="glass border-t border-white/60 mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <FontAwesomeIcon icon={faSpa} className="size-5 text-primary" />
              <span className="font-bold tracking-tight">ZenFlow Yoga & Pilates</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Find your balance. Transform your body and mind with expert-led yoga and pilates classes.
            </p>
            <div className="flex gap-3 pt-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FontAwesomeIcon icon={faInstagram} className="size-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FontAwesomeIcon icon={faFacebook} className="size-5" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><FontAwesomeIcon icon={faYoutube} className="size-5" /></a>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">Services</Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-primary">Pricing</Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Classes</h4>
            <div className="flex flex-col gap-2">
              <Link href="/services/hatha-yoga" className="text-sm text-muted-foreground hover:text-primary">Hatha Yoga</Link>
              <Link href="/services/vinyasa-flow" className="text-sm text-muted-foreground hover:text-primary">Vinyasa Flow</Link>
              <Link href="/services/reformer-pilates" className="text-sm text-muted-foreground hover:text-primary">Reformer Pilates</Link>
              <Link href="/services/meditation" className="text-sm text-muted-foreground hover:text-primary">Meditation</Link>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Studio Info</h4>
            <p className="text-sm text-muted-foreground">742 Serenity Lane<br />Portland, OR 97201</p>
            <p className="text-sm text-muted-foreground">(503) 555-0142</p>
            <p className="text-sm text-muted-foreground">hello@zenflowstudio.com</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/40 text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} ZenFlow Yoga & Pilates. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
