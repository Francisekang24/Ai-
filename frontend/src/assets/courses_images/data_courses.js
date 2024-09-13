import biology from './IntroductiontoBiology.png';
import advanced_math from './AdvancedMathematics.png';
import world_history from './WorldHistory.png';
import creative_writing from './CreativeWriting.png';
import computer_science from './IntroductiontoCS.png';
import physics from './PhysicsMechanics.png';
import chemistry from './ChemistryBasics.png';
import art_history from './ArtHistory.png';
import economics from './Economics.png';
import psychology from './Psychology.png';
import environment from './EnvironmentalScience.png';
import philosophy from './PhilosophyBasics.png';
import sociology from './IntroductionSociology.png';
import business from './Business.png';
import spanish from './Spanish.png';

const coursesData = [
    {
      id: 1,
      title: 'Introduction to Biology',
      description: 'Explore the basics of biology, from cells to ecosystems.',
      image: biology,
      status: 'current',
    },
    {
      id: 2,
      title: 'Advanced Mathematics',
      description: 'Dive deep into calculus and algebra.',
      image: advanced_math,
      status: 'current',
    },
    {
      id: 3,
      title: 'World History',
      description: 'A journey through the significant events of the past.',
      image: world_history,
      status: 'past',
    },
    {
      id: 4,
      title: 'Creative Writing',
      description: 'Enhance your writing skills and creativity.',
      image: creative_writing,
      status: 'past',
    },
    {
      id: 5,
      title: 'Introduction to Computer Science',
      description: 'Learn the fundamentals of computer science and programming.',
      image: computer_science,
      status: 'current',
    },
    {
      id: 6,
      title: 'Physics: Mechanics',
      description: 'Understand the laws governing motion and forces.',
      image: physics,
      status: 'current',
    },
    {
      id: 7,
      title: 'Chemistry Basics',
      description: 'An introduction to chemical reactions and the periodic table.',
      image: chemistry,
      status: 'past',
    },
    {
      id: 8,
      title: 'Art History',
      description: 'Study the evolution of art from ancient to modern times.',
      image: art_history,
      status: 'past',
    },
    {
      id: 9,
      title: 'Economics 101',
      description: 'Learn about microeconomics and macroeconomics principles.',
      image: economics,
      status: 'current',
    },
    {
      id: 10,
      title: 'Psychology Introduction',
      description: 'Explore the human mind and behavior.',
      image: psychology,
      status: 'current',
    },
    {
      id: 11,
      title: 'Environmental Science',
      description: 'Understand environmental issues and sustainability.',
      image: environment,
      status: 'current',
    },
    {
      id: 12,
      title: 'Philosophy Basics',
      description: 'Discuss fundamental philosophical questions and theories.',
      image: philosophy,
      status: 'past',
    },
    {
      id: 13,
      title: 'Introduction to Sociology',
      description: 'Examine society, social relationships, and institutions.',
      image: sociology,
      status: 'past',
    },
    {
      id: 14,
      title: 'Business Management',
      description: 'Learn the principles of managing a business effectively.',
      image: business,
      status: 'current',
    },
    {
      id: 15,
      title: 'Foreign Language: Spanish',
      description: 'Beginner course in Spanish language and culture.',
      image: spanish,
      status: 'current',
    },
    // Add more courses as needed
  ];
export default coursesData;
