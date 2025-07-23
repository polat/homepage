import { Social, SocialButton } from "@/components/social";
import Container from "@/components/container";
import { SOCIAL } from "@/lib/const";

export default function Index() {
  return (
    <>
      <Container className="space-y-8">
        <header>
          <h1 className="font-display text-4xl font-semibold">Polat İnceler</h1>
          <h2 className="font-display text-mute text-4xl">
            Agency Director at <a href="https://www.infomedya.agency">Infomedya</a>
          </h2>
        </header>

        <p>
          I’ve been leading web projects and managing agency, with a focus on PHP, Laravel, WordPress development, UI development and server management.
        </p>

        <p>
        Lately, I’ve been exploring AI-driven automation using tools like N8N and MCP Tools, experimenting with large language models for content generation, and developing smart home solutions.
        </p>

        <Social>
          <SocialButton href={`mailto:${SOCIAL.email}`}>Mail</SocialButton>
          <SocialButton href={SOCIAL.github}>GitHub</SocialButton>
          <SocialButton href={SOCIAL.x}>X</SocialButton>
          <SocialButton href={SOCIAL.linkedin}>LinkedIn</SocialButton>
        </Social>


      <footer>
        <p className="font-display">
          Based on the original design by{" "}
          <a
            href="https://github.com/ademilter/homepage"
            target="_blank"
            rel="noopener noreferrer"
          >
            Adem İlter
          </a>
        </p>
      </footer>
      </Container>
    </>
  );
}
