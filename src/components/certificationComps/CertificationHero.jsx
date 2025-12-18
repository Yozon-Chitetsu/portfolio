import FlipCard from "../FlipCard";
import certificate from "../../assets/certificate.jpg";

const CertificationHero = () => {
  return (
    <>
      {/* We need a parent <div> with the rotate-y-180 class on the text to avoid a mirrored text image. */}
      <FlipCard key="certificationHero">
        <div className="rotate-y-180 flex justify-center items-center w-full">
          <img
            src={certificate}
            alt="Fullstack Web Dev Certificate"
            loading="lazy"
            decoding="async"
            class="w-full object-contain"
          />
        </div>
      </FlipCard>
    </>
  );
};

export default CertificationHero;
