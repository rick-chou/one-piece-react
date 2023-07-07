window.onload = () => {
  gsap.registerPlugin(ScrollTrigger);

  const additionalY = { val: 0 };
  let additionalYAnim;
  let offset = 0;
  const cols = gsap.utils.toArray('.col');

  cols.forEach((col, i) => {
    const images = col.childNodes;

    // DUPLICATE IMAGES FOR LOOP
    images.forEach(image => {
      var clone = image.cloneNode(true);
      col.appendChild(clone);
    });

    // SET ANIMATION
    images.forEach(item => {
      let columnHeight = item.parentElement.clientHeight;
      let direction = i % 2 !== 0 ? '+=' : '-='; // Change direction for odd columns

      gsap.to(item, {
        y: direction + Number(columnHeight / 2),
        duration: 20,
        repeat: -1,
        ease: 'none',
        immediateRender: false,
        modifiers: {
          y: gsap.utils.unitize(y => {
            if (direction == '+=') {
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

  const imagesScrollerTrigger = ScrollTrigger.create({
    trigger: 'section',
    start: 'top 50%',
    end: 'bottom 50%',
    onUpdate: function (self) {
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
};
