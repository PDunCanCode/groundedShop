import { Container } from 'semantic-ui-react';

const About = () => {
  return (
    <Container>
      <div className='about-area bg-white'>
        <h3>Our Story</h3>

        <div className='ui grid mb-10'>
          <div className='seven wide column'>
            <img
              src='https://res.cloudinary.com/pauseprogramming/image/upload/v1593559610/grounded/tinified/7d473be7-e511-4819-a419-8f370bff7d3c_eupf0r.jpg'
              alt='JP Duncan founder of bioenergetic guided active meditation grounded hlc - groundedhlc'
            />
          </div>

          <div className='eight wide column'>
            <p>
              Grounded Holistic Lifestyle Co. grew out of a lot of pain.
              Jonathan Paul, Grounded HLC's founder, spent 10+ years chasing
              someone else's ideal of success. 80 hour work weeks, spent pouring
              over documents, making other people rich. But his personal and
              spiritual life suffered. There was always a trade: time for money.
            </p>
            <p>
              Jonathan has a Bachelor's Degree in Accounting, and quickly
              realized doing taxes for ultra high net worth individuals was
              robbing him of peace of mind. The constant deadlines made it seem
              like it was always April 14th to JP.
            </p>
            <p>
              One day he tried an Active Meditation, pioneered by Osho, and
              taught by Elliot Hulse. And that stress & suffering faded. He
              tried another session, more relief. One meditation in the morning
              made work bareable, a kundalini meditation at night, and babies
              don't sleep so well.
            </p>
          </div>
        </div>

        <p>
          From that point on Jon made it a priority to learn how to meditate.
          Soon, Jonathan was completing intensive & immersive meditation
          retreats, and studying holisitic lifestyles. His headspace became more
          comfortable, and going to work felt light. Gone were the days of
          insomnia and stress induced panic. Eventually, promoted to Senior
          Accountant at his firm, Jonathan spent a long vacation in Berlin,
          Germany to study Active Meditation under Elliot Hulse's teachers, who
          were themselves taught by Osho. Concurrently, studying at the CHEK
          Institute, JP earned his CHEK level 2 certification, to become a
          certified CHEK Practioner.
        </p>

        <p>
          This would be a truly transformative experience for Jonathan. As he
          returned back to the Bay area, and to accounting, he began to dream if
          there was a way to share his new perspective with others. Perhaps, you
          - like him - feel like life is unmanageable, and if only you had the
          tools that he now has, your life would be easier, and you could find
          success, too.
        </p>

        <p>
          And this was how Grounded Holistic Lifestyle Co. was founded. One man
          hoped to create a way to share the practices that so greately improved
          his quality of life. And he hopes to share them with you now.
        </p>

        <p>
          Pick out a sticker, a meditation, or a coaching session, buy that
          sucker and lets start a conversation about where we can go next,
          together.
        </p>
      </div>
    </Container>
  );
};

export default About;
