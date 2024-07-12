

const sections = [
  {
    title: 'Fully Responsive Design',
    description: 'When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it\'s a phone, tablet, or desktop the page will behave responsively!',
    image: 'https://media.idownloadblog.com/wp-content/uploads/2021/04/iPhone-7-Plus-dual-lense-rear-camera-led-flash.jpg', 
  },
  {
    title: 'Updated For Bootstrap 5',
    description: 'Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!',
    image: 'https://www.enterpriseitworld.com/wp-content/uploads/2019/10/ManageEngine.jpg',
  },
  {
    title: 'Easy to Use & Customize',
    description: 'Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!',
    image: 'https://www.tiwariacademy.com/app/uploads/2021/01/assignmentshark.png',
  },
];

export function Sixpic (){
  return (
    <div className="text-image-section">
      {sections.map((item, index) => (
        <div key={index} className="section">
          {index % 2 === 0 ? (
            <>
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
            </>
          ) : (
            <>
              <div className="image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="text">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
