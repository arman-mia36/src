

export default function Footer() {
  return (
    <div className="bg-black  pt-24 flex justify-center items-center">
          <div className="container mx-auto ">
              <div className="flex justify-center mt-20">
                  <img src="/images/logo-footer.png" alt="" />
              </div>
        <footer className="footer text-base-content p-10 flex justify-between items-center flex-col md:flex-row  mt-12">
          <nav className="text-white">
            <h6 className="footer-title">About Us</h6>
            <p>
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </nav>
          <nav className="text-white">
            <h6 className="footer-title">Quick Links</h6>
                      <ul className="list-disc space-y-2">
                          <a href=""><li className="mt-2">Home</li></a>
                          <a href=""><li className="mt-2">Servise</li></a>
                          <a href=""><li className="mt-2">About</li></a>
                          <a href=""><li className="mt-2">Contuct</li></a>
           </ul>
          </nav>
          <form className="text-white">
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text text-white">
                  Enter your email address
                </span>
              </label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </footer>
        <p className="text-white text-center py-8">
          @2024 Your Company All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
