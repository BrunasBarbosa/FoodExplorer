import { ArrowLeft } from '../../assets/icons/ArrowLeft';
import { ArrowRight } from '../../assets/icons/ArrowRight';
import { Container } from './styles';
import { Card } from '../Card';
import { useRef } from 'react';

export function Section({ title, data, icon: Icon, children }) {
  const sectionRef = useRef(null);

  function handleScrollRight() {
    sectionRef.current.scrollBy({ left: 250, behavior: 'smooth' });
  }

  function handleScrollLeft() {
    sectionRef.current.scrollBy({ left: -250, behavior: 'smooth' });
  }

  return (
    <Container>
      {data.length > 0 &&
        <>
          <h3>{title}</h3>
          <div className='gradient left' onClick={handleScrollLeft}>
            <ArrowLeft />
          </div>
          <div className='cards' ref={sectionRef}>
            {
              data.length &&
              data.map((dishe, index) => (
                <Card
                  key={String(index)}
                  data={dishe}
                  icon={Icon}
                  children={children}
                />
              ))
            }
          </div>
          <div className='gradient right' onClick={handleScrollRight}>
            <ArrowRight />
          </div>
        </>
      }
    </Container>
  );
}