function Banner() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
        data-testid="get_swiggy_app_qr"
        className="mt-12"
      >
        <img
          alt="Get the Swiggy App banner"
          style={{
            objectFit: "contain",
            height: "100%",
            width: "100%",
          }}
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/App_download_banner.png"
        />
      </div>
    );
}

export default Banner;