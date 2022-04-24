import React from "react";
import Header from "../commons/Header";
import "../commons/Header.scss";
function About() {
  return (
    <div>
      <Header />
      <div className="about-div">
        <h1>WHO INVENTED CINEMA?</h1>
        <p>
          No one person invented cinema. However, in 1891 the Edison Company
          successfully demonstrated a prototype of the Kinetoscope, which
          enabled one person at a time to view moving pictures. The first public
          Kinetoscope demonstration took place in 1893. By 1894 the Kinetoscope
          was a commercial success, with public parlours established around the
          world. The first to present projected moving pictures to a paying
          audience were the Lumière brothers in December 1895 in Paris, France.
          They used a device of their own making, the Cinématographe, which was
          a camera, a projector and a film printer all in one.
        </p>
        <h1>THE RISE OF THE FILM INDUSTRY</h1>
        <p>
          By 1914, several national film industries were established. At this
          time, Europe, Russia and Scandinavia were the dominant industries;
          America was much less important. Films became longer and storytelling,
          or narrative, became the dominant form. As more people paid to see
          movies, the industry which grew around them was prepared to invest
          more money in their production, distribution and exhibition, so large
          studios were established and dedicated cinemas built. The First World
          War greatly affected the film industry in Europe, and the American
          industry grew in relative importance. The first 30 years of cinema
          were characterised by the growth and consolidation of an industrial
          base, the establishment of the narrative form, and refinement of
          technology.
        </p>
      </div>
    </div>
  );
}

export default About;
