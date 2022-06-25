import "./showcase.css";
import { useSearch } from "react-location";
import R from "ramda";

export default function CardShowCase() {
  const search = useSearch() || {};
  const {
    fullName = "",
    title = "Full Stack Developer",
    aboutMe = "",
    githubURL = "",
    twitterURL = "",
    favouriteBooks = "",
    HTML = false,
    CSS = false,
    JS = false,
    Git = false,
    React = false,
    NodeJS = false,
    Sass = false,
    PHP = false,
    NPM = false,
    Gulp = false
  } = search;
  const firstName = R.path([0], fullName.split(" "));
  const books = favouriteBooks.split(",").reduce((acc, book) => {
    const titleAuthor = book.split("-");
    acc.push({
      title: R.path([0], titleAuthor),
      author: R.path([1], titleAuthor)
    });
    return acc;
  }, []);

  return (
    <div className="pageBody">
      <main class="has-dflex-center">
        <section>
          <div class="lx-container-85">
            <div class="lx-row align-stretch">
              <div class="lx-column is-3">
                <div class="lx-row">
                  <div class="lx-card">
                    <div class="lx-row">
                      <div class="has-dflex-center bs-md pic">
                        <img
                          src="https://github.com/luxonauta.png"
                          alt={fullName}
                        />
                      </div>
                      <div class="infos">
                        <span>
                          <i class="fas fa-user-circle"></i>&nbsp;&nbsp;{" "}
                          {fullName}
                        </span>
                        <span>
                          <i class="fas fa-briefcase"></i>&nbsp;&nbsp;{title}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div class="lx-card">
                    <div class="lx-row">
                      <h1 class="title">Connect with {firstName}</h1>
                      <div class="mini-cards">
                        <a
                          class="has-dflex-center bs-md"
                          href={githubURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-github-alt"></i>
                        </a>
                        <a
                          class="has-dflex-center bs-md"
                          href={twitterURL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i class="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lx-column">
                <div class="lx-row">
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-info-circle"></i>&nbsp;Welcome to&nbsp;
                      {firstName}'s corner of the Internet
                    </h1>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-hand-point-right"></i>&nbsp;About me
                    </h1>
                    <div class="text">
                      <p>{aboutMe}</p>
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-terminal"></i>&nbsp;Technologies
                    </h1>
                    <div class="mini-cards">
                      {CSS ? (
                        <span class="has-dflex-center bs-md" title="CSS">
                          <i class="fab fa-css3-alt"></i>
                        </span>
                      ) : null}
                      {HTML ? (
                        <span class="has-dflex-center bs-md" title="HTML">
                          <i class="fab fa-html5"></i>
                        </span>
                      ) : null}
                      {JS ? (
                        <span class="has-dflex-center bs-md" title="JS">
                          <i class="fab fa-js"></i>
                        </span>
                      ) : null}
                      {Git ? (
                        <span class="has-dflex-center bs-md" title="Git">
                          <i class="fab fa-git-alt"></i>
                        </span>
                      ) : null}
                      {NodeJS ? (
                        <span class="has-dflex-center bs-md" title="Node JS">
                          <i class="fab fa-node-js"></i>
                        </span>
                      ) : null}
                      {React ? (
                        <span class="has-dflex-center bs-md" title="React">
                          <i class="fab fa-react"></i>
                        </span>
                      ) : null}
                      {Sass ? (
                        <span class="has-dflex-center bs-md" title="Sass">
                          <i class="fab fa-sass"></i>
                        </span>
                      ) : null}
                      {PHP ? (
                        <span class="has-dflex-center bs-md" title="PHP">
                          <i class="fab fa-php"></i>
                        </span>
                      ) : null}
                      {NPM ? (
                        <span class="has-dflex-center bs-md" title="NPM">
                          <i class="fab fa-npm"></i>
                        </span>
                      ) : null}
                      {Gulp ? (
                        <span class="has-dflex-center bs-md" title="Gulp">
                          <i class="fab fa-gulp"></i>
                        </span>
                      ) : null}
                    </div>
                  </div>
                  <div class="lx-row lx-card">
                    <h1 class="title">
                      <i class="fas fa-book"></i>&nbsp;My favorite books
                    </h1>
                    <div class="text">
                      <ol>
                        {books.map((book, i) => {
                          const { title, author = "" } = book;
                          return (
                            <li key={i}>
                              <p>
                                <b>{title}</b>&nbsp;
                                {author.trim() ? (
                                  <span>- {author.trim()}</span>
                                ) : null}
                              </p>
                            </li>
                          );
                        })}
                        {/* <li>
                          <p>
                            <b>The Lord of the Rings</b>&nbsp;- J. R. R. Tolkien
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Foundation series</b>&nbsp;- Isaac Asimov
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Cracking the Coding Interview</b>&nbsp;- Gayle
                            Laakmann
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>Clean Code</b>&nbsp;- Rob Martin
                          </p>
                        </li>
                        <li>
                          <p>
                            <b>A Brief History of Time</b>&nbsp;- Stephen
                            Hawking
                          </p>
                        </li> */}
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
