import styled from "styled-components";
import anime from "animejs";
import { useEffect } from "react";

const StyledPulsar = styled.div`
  margin: 1rem;
`;

const pulsarHeight = 300;
const pulsarWidth = 300;

export const Pulsar = () => {
  const animated = { r: 50 };
  const timelineConfig = {
    duration: 2000,
    easing: "easeOutQuad",
    loop: true
  };

  useEffect(() => {
    const pulse = document.getElementById("pulse");
    const timeline = anime.timeline(timelineConfig);

    timeline.add({
      targets: animated,
      r: 130,

      update: function() {
        pulse.setAttribute("r", animated.r);
      }
    });
  }, []);

  return (
    <StyledPulsar>
      <svg
        height={`${pulsarHeight}`}
        width={`${pulsarWidth}`}
        viewBox={`0 0 ${pulsarHeight} ${pulsarWidth}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          fill="royalblue"
          cx={`${pulsarWidth / 2}`}
          cy={`${pulsarHeight / 2}`}
          r="50"
        />
        <circle
          id="pulse"
          fill="royalblue"
          cx={`${pulsarWidth / 2}`}
          cy={`${pulsarHeight / 2}`}
          opacity="0.1"
          r={`${animated.r}`}
        />
      </svg>
    </StyledPulsar>
  );
};
