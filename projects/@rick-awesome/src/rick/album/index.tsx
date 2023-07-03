import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import './index.scss';

const Album = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const additionalY = { val: 0 };
    let additionalYAnim;
    let offset = 0;
    const cols = gsap.utils.toArray('.col');

    cols.forEach((col, i) => {
      const images = col.childNodes;

      // DUPLICATE IMAGES FOR LOOP
      images.forEach(image => {
        const clone = image.cloneNode(true);
        col.appendChild(clone);
      });

      // SET ANIMATION
      images.forEach(item => {
        const columnHeight = item.parentElement.clientHeight;
        const direction = i % 2 !== 0 ? '+=' : '-='; // Change direction for odd columns

        gsap.to(item, {
          y: direction + Number(columnHeight / 2),
          duration: 20,
          repeat: -1,
          ease: 'none',
          modifiers: {
            y: gsap.utils.unitize(y => {
              if (direction === '+=') {
                offset += additionalY.val;
                y = (parseFloat(y) - offset) % (columnHeight * 0.5);
              } else {
                offset += additionalY.val;
                y = (parseFloat(y) + offset) % -Number(columnHeight * 0.5);
              }

              return y;
            }),
          },
        });
      });
    });

    ScrollTrigger.create({
      trigger: document.querySelector('section'),
      start: 'top 50%',
      end: 'bottom 50%',
      onUpdate(self) {
        const velocity = self.getVelocity();
        if (velocity > 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 2000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }

        if (velocity < 0) {
          if (additionalYAnim) additionalYAnim.kill();
          additionalY.val = -velocity / 3000;
          additionalYAnim = gsap.to(additionalY, { val: 0 });
        }
      },
    });
  }, []);

  return (
    <>
      <section>
        <h1>Vertical image loop with scroll acceleration with gsap</h1>

        <h2 className="credit">
          <a
            href="https://thisisadvantage.com"
            target="_blank"
            rel="noreferrer">
            Made by Advantage
          </a>
        </h2>
      </section>

      <div className="gallery">
        <div className="col">
          <div className="image">
            <img
              src="https://images.pexels.com/photos/10324713/pexels-photo-10324713.jpeg?cs=srgb&dl=pexels-taha-samet-arslan-10324713.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/10533885/pexels-photo-10533885.jpeg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/10253213/pexels-photo-10253213.jpeg?cs=srgb&dl=pexels-beepin-10253213.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
        </div>
        <div className="col">
          <div className="image">
            <img
              src="https://images.pexels.com/photos/10050979/pexels-photo-10050979.jpeg?cs=srgb&dl=pexels-%D0%B8%D0%BB%D1%8C%D1%8F-%D0%BF%D0%B0%D1%85%D0%BE%D0%BC%D0%BE%D0%B2-10050979.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/1128660/pexels-photo-1128660.jpeg?cs=srgb&dl=pexels-nur-andi-ravsanjani-gusma-1128660.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/9699293/pexels-photo-9699293.jpeg?cs=srgb&dl=pexels-lada-rezantseva-9699293.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
        </div>
        <div className="col">
          <div className="image">
            <img
              src="https://images.pexels.com/photos/6405575/pexels-photo-6405575.jpeg?cs=srgb&dl=pexels-daria-sannikova-6405575.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/10162526/pexels-photo-10162526.jpeg?cs=srgb&dl=pexels-svetlana%F0%9F%8E%9E-10162526.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
          <div className="image">
            <img
              src="https://images.pexels.com/photos/4394807/pexels-photo-4394807.jpeg?cs=srgb&dl=pexels-woodysmedia-4394807.jpg&fm=jpg?auto=compress&cs=tinysrgb&h=650&w=940%20940w"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;
