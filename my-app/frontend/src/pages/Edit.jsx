import * as React from "react";

const Button = ({ children, className }) => (
  <button className={`button ${className}`}>
    <span className="button-text">{children}</span>
    <span className="button-shadow">{children}</span>
  </button>
);

const CategoryButton = ({ category }) => (
  <Button className={`category-button ${category.toLowerCase()}`}>
    {category}
  </Button>
);

function MyComponent() {
  const categories = ["Hats", "Wings", "Accs"];

  return (
    <>
      <header className="header">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e235c0e61313ece8ba0b549b40c0ee6a4462cae924cec47f23a28de27b84944b?apiKey=679bb02574b947f09c9259dd25e40624&"
          alt="User avatar"
          className="avatar"
        />
        <Button className="edit-button">Edit</Button>
      </header>

      <main className="main-content">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f44716d9688e1b4838e65cfe2deea8f92f6beb92936f4cc6345605fdd938b3cf?apiKey=679bb02574b947f09c9259dd25e40624&"
          alt="Main content image"
          className="main-image"
        />

        <section className="category-section">
          <div className="category-buttons">
            {categories.map((category) => (
              <CategoryButton key={category} category={category} />
            ))}
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a800b1a1ccd2587b34713f9d9fe0a046684bcacdae671fc8d14325ebc13841d?apiKey=679bb02574b947f09c9259dd25e40624&"
            alt="Category image"
            className="category-image"
          />
          <Button className="more-button">...</Button>
        </section>
      </main>

      <style jsx>{`
        .header {
          background-color: #ffa800;
          display: flex;
          width: 100%;
          max-width: 390px; /* iPhone 15 size */
          margin: 0 auto; /* Center the header */
          align-items: center;
          gap: 20px;
          font-size: 26px;
          justify-content: center;
          padding: 41px 80px 18px 26px;
        }

        .avatar {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 48px;
          border-radius: 30.5px;
          box-shadow: 0 7px 4px 0 rgba(255, 168, 0, 0.6);
          align-self: start;
        }

        .button {
          border: none;
          background: none;
          cursor: pointer;
          position: relative;
          padding: 0;
        }

        .button-text {
          position: relative;
          z-index: 1;
          color: #ffd969;
          font-family: "Press Start 2P", -apple-system, Roboto, Helvetica, sans-serif;
        }

        .button-shadow {
          position: absolute;
          top: 3px;
          left: 0;
          color: #472700;
          font-family: "Press Start 2P", -apple-system, Roboto, Helvetica, sans-serif;
        }

        .edit-button {
          align-self: center;
          margin-top: 20px;
        }

        .main-content {
          background-color: #fff5bb;
          display: flex;
          max-width: 480px;
          width: 100%;
          padding-bottom: 42px;
          flex-direction: column;
          font-weight: 400;
          white-space: nowrap;
          margin: 0 auto;
        }

        .main-image {
          aspect-ratio: 1.3;
          object-fit: auto;
          object-position: center;
          width: 100%;
        }

        .category-section {
          display: flex;
          margin-top: 19px;
          width: 100%;
          flex-direction: column;
          align-items: center;
        }

        .category-buttons {
          display: flex;
          gap: 18px;
          font-size: 13px;
        }

        .category-button {
          border-radius: 25px;
          box-shadow: 0 6px 4px 0 rgba(234, 117, 0, 0.7);
          display: flex;
          flex-direction: column;
          flex: 1;
          padding: 13px 18px;
        }

        .hats {
          border: 3px solid rgba(132, 70, 11, 1);
          background-color: #ffcb33;
        }

        .wings,
        .accs {
          background-color: #ffd969;
        }

        .category-image {
          aspect-ratio: 1.37;
          object-fit: auto;
          object-position: center;
          width: 100%;
          border-radius: 25px;
          box-shadow: 0 6px 4px 0 rgba(234, 117, 0, 0.7);
          align-self: stretch;
          margin-top: 19px;

        }

        .more-button {
          border-radius: 25px;
          box-shadow: 0 6px 4px 0 rgba(234, 117, 0, 0.7);
          background-color: #ffd969;
          color: #472700;
          justify-content: center;
          padding: 11px 20px;
          font: 25px "Press Start 2P", -apple-system, Roboto, Helvetica, sans-serif;
        }
      `}</style>
    </>
  );
}

export default MyComponent;