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
    const submit = (e) => {
      e.preventDefault()
      // console.log('submit')
    };


    return (
      <section>
        <h1>Amazing scientists</h1>
        
        <form
          action=""
          onSubmit={submit}
        >
          <button type="submit">Btn</button>
        </form>

        {
          profiles.map((profile, i) => 
            <Profile key={i} src={profile.src} name={profile.name} />
          )
        }
      </section>
    );
  }