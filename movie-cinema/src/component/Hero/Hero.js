import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <div>
            <div class="container">
                <section class="hero">
                    <div class="hero-left">
                        <h2 class="hero-title">Title</h2>
                        <h3 class="hero-genre">Genre :</h3>
                        <p class="hero-description">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam sapiente, hic laudantium officia saepe adipisci reprehenderit aliquid nobis nesciunt vitae? Ea harum ipsa tempora. Culpa aspernatur beatae nisi ad delectus.
                        </p>
                        <button className="hero-button">Klick</button>
                    </div>
                    <div class="hero-right">
                        <img src="https://picsum.photos/200" alt="hero-img" className="hero-image" />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Hero;