import Reveal from "../components/ui/Reveal";
import Button from "../components/ui/Button";

export default function Placeholder({ title, eyebrow }) {
  return (
    <section className="min-h-[70vh] bg-ivory pb-28 pt-40">
      <div className="container-guru">
        <Reveal>
          <p className="mt-7 h-screen w-screen  text-base leading-8 text-muted flex items-center justify-center">
            WE WILL BE LIVE SOON <br></br>
            TILL THEN - INVEST GROW AND MULTIPLY
          </p>
          <Button className="mt-8" to="/contact">
            TALK TO AN ADVISOR
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
