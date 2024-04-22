const Footer = () => {
  const styles = {
    text: "text-sm text-zinc-400 text-center py-6 bg-[#132A34] pb-32 px-12",
  };

  return (
    <footer className={styles.text}>
      <small>&copy; 2024 Hannah Feehan. All rights reserved.</small>
      <p className="py-2">
        <span className="font-bold">About this website:</span> built with React
        & Vite, Tailwind CSS, EmailJS and Vercel hosting
      </p>
    </footer>
  );
};

export default Footer;
