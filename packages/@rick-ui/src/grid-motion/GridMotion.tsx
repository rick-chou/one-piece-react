import { memoSVC } from '@rickzhou/react-utils';
import { gsap } from 'gsap';
import { type FC, useEffect, useRef } from 'react';

export type GridMotionProps = {
  items?: string[];
  gradientColor?: string;
};

const GridMotion: FC<GridMotionProps> = memoSVC(
  ({ items = [], gradientColor = 'black' }) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
    const mouseXRef = useRef<number>(window.innerWidth / 2);

    // Ensure the grid has 28 items (4 rows x 7 columns) by default
    const totalItems = 28;
    const defaultItems = Array.from(
      { length: totalItems },
      (_, index) => `Item ${index + 1}`,
    );
    const combinedItems =
      items.length > 0 ? items.slice(0, totalItems) : defaultItems;

    useEffect(() => {
      gsap.ticker.lagSmoothing(0);

      const handleMouseMove = (e: MouseEvent): void => {
        mouseXRef.current = e.clientX;
      };

      const updateMotion = (): void => {
        const maxMoveAmount = 300;
        const baseDuration = 0.8; // Base duration for inertia
        const inertiaFactors = [0.6, 0.4, 0.3, 0.2]; // Different inertia for each row, outer rows slower

        rowRefs.current.forEach((row, index) => {
          if (row) {
            const direction = index % 2 === 0 ? 1 : -1;
            const moveAmount =
              ((mouseXRef.current / window.innerWidth) * maxMoveAmount -
                maxMoveAmount / 2) *
              direction;

            gsap.to(row, {
              x: moveAmount,
              duration:
                baseDuration + inertiaFactors[index % inertiaFactors.length],
              ease: 'power3.out',
              overwrite: 'auto',
            });
          }
        });
      };

      const removeAnimationLoop = gsap.ticker.add(updateMotion);
      window.addEventListener('mousemove', handleMouseMove);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        removeAnimationLoop();
      };
    }, []);

    return (
      <div ref={gridRef} className="h-full w-full overflow-hidden">
        <section
          className="relative flex h-screen w-full items-center justify-center overflow-hidden"
          style={{
            background: `radial-gradient(circle, ${gradientColor} 0%, transparent 100%)`,
          }}>
          {/* Noise overlay */}
          <div className="pointer-events-none absolute inset-0 z-[4] bg-[url('../../../assets/noise.png')] bg-[length:250px]"></div>
          <div className="relative z-[2] grid h-[150vh] w-[150vw] flex-none origin-center rotate-[-15deg] grid-cols-1 grid-rows-4 gap-4">
            {Array.from({ length: 4 }, (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-7 gap-4"
                style={{ willChange: 'transform, filter' }}
                ref={el => (rowRefs.current[rowIndex] = el)}>
                {Array.from({ length: 7 }, (_, itemIndex) => {
                  const content = combinedItems[rowIndex * 7 + itemIndex];
                  return (
                    <div key={itemIndex} className="relative">
                      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[10px] bg-[#111] text-[1.5rem] text-white">
                        {typeof content === 'string' &&
                        content.startsWith('http') ? (
                          <div
                            className="absolute top-0 left-0 h-full w-full bg-cover bg-center"
                            style={{
                              backgroundImage: `url(${content})`,
                            }}></div>
                        ) : (
                          <div className="z-[1] p-4 text-center">{content}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
          <div className="pointer-events-none relative top-0 left-0 h-full w-full"></div>
        </section>
      </div>
    );
  },
);

export default GridMotion;
