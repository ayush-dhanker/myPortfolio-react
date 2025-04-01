const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7  align-item">
      <a
        className="hover:opacity-50 transition duration-500 bg-deep-blue"
        href="https://www.linkedin.com/in/ayush-dhanker-55a031223/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/ayush-dhanker"
        target="_blank"
        rel="noreferrer"
        style={{ height: "30px", width: "50px", paddingTop: "4px" }}
      >
        <img alt="github-link" src="../assets/GitHub_Logo.png" />
      </a>
      {/* <a
        className="hover:opacity-50 transition duration-500 bg-deep-blue"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 bg-deep-blue"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500 bg-deep-blue"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a> */}
    </div>
  );
};

export default SocialMediaIcons;
