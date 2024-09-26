/*
function Profile() {
  return (
    <a href="#">
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
      <div>Katherine Johnson</div>
    </a>
  );
}
*/
import Image from 'next/image';

function Profile({src, name}) {
  return (
    <a href="#" key={name}>
      <Image
        src={src}
        alt={name}
        width={100}
        height={100}
      />
      <div>{name}</div>
    </a>
  );
}

export default function ContactUs() {
  const profiles = [
    {
      src: 'https://i.imgur.com/MK3eW3As.jpg',
      name: 'Katherine Johnson'
    },
    {
      src: 'https://i.imgur.com/MK3eW3As.jpg',
      name: 'Katherine Johnson'
    },
    {
      src: 'https://i.imgur.com/MK3eW3As.jpg',
      name: 'Katherine Johnson'
    }
  ];
    return (
      <section>
        <h1>Amazing scientists</h1>
        {/* <Profile />
        <Profile />
        <Profile /> */}
        {
          profiles.map(profile => 
            <Profile src={profile.src} name={profile.name} />
          )
        }
      </section>
    );
  }