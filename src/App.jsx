import NfNavbar from './components/NfNavbar.jsx';
import Toolbar from './components/Toolbar.jsx';
import CarouselRow from './components/CarouselRow.jsx';
import NfFooter from './components/NfFooter.jsx';

const trendingNow = [
  { src: './assets/media/media0.webp',  alt: 'media0',  badge: 'NEW EPISODES' },
  { src: '/assets/media/media1.jpg',   alt: 'media1' },
  { src: '/assets/media/media3.webp',  alt: 'media3' },
  { src: '/assets/media/media4.jpg',   alt: 'media4' },
  { src: '/assets/media/media5.webp',  alt: 'media5' },
  { src: '/assets/media/media6.jpg',   alt: 'media6' },
  { src: '/assets/media/media7.webp',  alt: 'media7' },
  { src: '/assets/media/media8.webp',  alt: 'media8' },
  { src: '/assets/media/media9.jpg',   alt: 'media9' },
  { src: '/assets/media/media10.jpg',  alt: 'media10' },
  { src: '/assets/media/media31.webp', alt: 'media31' },
  { src: '/assets/media/media32.jpg',  alt: 'media32' },
];

const watchItAgain = [
  { src: '/assets/media/media2.webp',  alt: 'media2' },
  { src: '/assets/media/media11.jpg',  alt: 'media11' },
  { src: '/assets/media/media12.jpg',  alt: 'media12' },
  { src: '/assets/media/media13.jpg',  alt: 'media13' },
  { src: '/assets/media/media14.webp', alt: 'media14' },
  { src: '/assets/media/media15.jpg',  alt: 'media15' },
  { src: '/assets/media/media28.jpg',  alt: 'media28' },
  { src: '/assets/media/media29.jpg',  alt: 'media29' },
  { src: '/assets/media/media30.jpg',  alt: 'media30' },
];

const newReleases = [
  { src: '/assets/media/media16.webp', alt: 'media16' },
  { src: '/assets/media/media17.jpg',  alt: 'media17' },
  { src: '/assets/media/media18.jpg',  alt: 'media18' },
  { src: '/assets/media/media19.webp', alt: 'media19' },
  { src: '/assets/media/media20.jpg',  alt: 'media20' },
  { src: '/assets/media/media21.webp', alt: 'media21' },
  { src: '/assets/media/media22.webp', alt: 'media22' },
  { src: '/assets/media/media23.webp', alt: 'media23' },
  { src: '/assets/media/media24.jpg',  alt: 'media24' },
  { src: '/assets/media/media25.webp', alt: 'media25' },
  { src: '/assets/media/media26.webp', alt: 'media26' },
  { src: '/assets/media/media27.jpg',  alt: 'media27' },
];

export default function App() {
  return (
    <>
      <NfNavbar />
      <Toolbar />

      <section className="rows-wrapper bg-black text-white">
        <div className="container-fluid px-3 px-md-4">
          <CarouselRow title="Trending Now" items={trendingNow} />
          <CarouselRow title="Watch It Again" items={watchItAgain} className="mt-3" />
          <CarouselRow title="New Releases" items={newReleases} className="mt-3" />
        </div>
      </section>

      <NfFooter />
    </>
  );
}
