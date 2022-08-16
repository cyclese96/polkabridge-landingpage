import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  background: {
    paddingTop: 80,
    paddingBottom: 80,
    paddingLeft: "8%",
    paddingRight: "8%",
    backgroundColor: "transparent",
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      paddingLeft: "1%",
      paddingRight: "1%",
    },
  },
  heading: {
    color: "white",
    textAlign: "center",
    fontSize: 54,
    fontWeight: 700,
    verticalAlign: "middle",
    wordSpacing: "0px",
    margin: "0px 0px 12px",

    [theme.breakpoints.down("sm")]: {
      fontSize: "32px",
    },
  },
  itemWrapper: {
    marginLeft: 10,
    paddingLeft: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:
      "linear-gradient(rgb(23, 29, 42) 0%, rgba(23, 29, 42, 0) 100%)",
    padding: "7px 20px 7px 20px",
    borderRadius: 20,
    backgroundColor: "initial",
    color: "white",
    boxShadow: `rgb(0 0 0 / 2%) 0px 1px 1px, rgb(0 0 0 / 2%) 0px 2px 2px, rgb(0 0 0 / 2%) 0px 4px 4px, rgb(0 0 0 / 2%) 0px 6px 8px, rgb(0 0 0 / 2%) 0px 8px 16px`,
  },
  logo: {
    height: 20,
    width: 20,
  },
  title: {
    marginLeft: 8,
    fontSize: 15,
    fontWeight: 600,
  },
  growth: {
    backgroundColor: "rgba(0,100,0,0.7)",
    borderRadius: 20,
    color: "white",
    padding: "3px 8px 3px 8px",
    marginLeft: 8,
    fontSize: 12,
  },
}));
export default function LaunchpadATH() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <p className={classes.heading}> Funding raised projects</p>
      <div>
        <div class="marquee-wrapper ">
          <div class="marquee-block">
            <div class="marquee-inner to-left">
              <span>
                <div class="marquee-item">
                  <a href="https://alphadex.io/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/alphadex.jpg"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>AlphaDex</div>
                      <div className={classes.growth}>500X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://pixelverse.ai/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/pixelverse.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>PixelVerse</div>
                      <div className={classes.growth}>86X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://www.peoplez.io/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/peoplez.svg"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>PeopleZ</div>
                      <div className={classes.growth}>50X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://defactor.com/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/defactor.svg"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Defactor</div>
                      <div className={classes.growth}>30X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://playermon.com/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/playmon.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>PlayerMon</div>
                      <div className={classes.growth}>30X</div>
                    </div>
                  </a>
                </div>
              </span>
              <span>
                <div class="marquee-item">
                  <a href="https://alphadex.io/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/alphadex.jpg"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>AlphaDex</div>
                      <div className={classes.growth}>500X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://pixelverse.ai/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/pixelverse.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>PixelVerse</div>
                      <div className={classes.growth}>86X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://www.peoplez.io/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/peoplez.svg"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>PeopleZ</div>
                      <div className={classes.growth}>50X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://defactor.com/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/defactor.svg"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Defactor</div>
                      <div className={classes.growth}>30X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://playermon.com/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/playmon.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>PlayerMon</div>
                      <div className={classes.growth}>30X</div>
                    </div>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="marquee-wrapper ">
          <div class="marquee-block">
            <div class="marquee-inner to-right">
              <span>
                <div class="marquee-item">
                  <a target="_blank" href="https://animalconcerts.com/">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="https://animalconcerts.com/wp-content/uploads/2022/03/ANIMAL_CONCERTS_Stacked_Original-Color-V1-1-1-300x116.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title} style={{ fontSize: 12 }}>
                        Animal Concerts
                      </div>
                      <div className={classes.growth}>20X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a target="_blank" href="https://widiland.com/">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/widiland.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>WidiLand</div>
                      <div className={classes.growth}>20X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a target="_blank" href="https://tryhards.io/">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/tryhards.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Try Hards</div>
                      <div className={classes.growth}>20X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a target="_blank" href="https://playermon.com/">
                    {" "}
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/playmon.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>PlayerMon</div>
                      <div className={classes.growth}>30X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a target="_blank" href="https://www.shoefy.io/">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/shoefy.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Shoefy</div>
                      <div className={classes.growth}>10X</div>
                    </div>
                  </a>
                </div>
              </span>
              <span>
                <div class="marquee-item">
                  <a target="_blank" href="https://animalconcerts.com/">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="https://animalconcerts.com/wp-content/uploads/2022/03/ANIMAL_CONCERTS_Stacked_Original-Color-V1-1-1-300x116.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title} style={{ fontSize: 12 }}>
                        Animal Concerts
                      </div>
                      <div className={classes.growth}>20X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a target="_blank" href="https://widiland.com/">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/widiland.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>WidiLand</div>
                      <div className={classes.growth}>20X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a target="_blank" href="https://tryhards.io/">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/tryhards.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Try Hards</div>
                      <div className={classes.growth}>20X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a target="_blank" href="https://playermon.com/">
                    {" "}
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/playmon.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>PlayerMon</div>
                      <div className={classes.growth}>30X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a target="_blank" href="https://www.shoefy.io/">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/shoefy.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Shoefy</div>
                      <div className={classes.growth}>10X</div>
                    </div>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>

        <div class="marquee-wrapper ">
          <div class="marquee-block">
            <div class="marquee-inner to-left">
              <span>
                <div class="marquee-item">
                  <a href="https://www.beyondfinance.com/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/byn.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Beyond Finance</div>
                      <div className={classes.growth}>10X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://gravitonzero.com/" target="_blank">
                    {" "}
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/grv.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Graviton Zero</div>
                      <div className={classes.growth}>10X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://polkawar.com/" target="_blank">
                    {" "}
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/polkawar.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Polkawar</div>
                      <div className={classes.growth}>6X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://calo.run/" target="_blank">
                    {" "}
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/calo.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Calo</div>
                      <div className={classes.growth}>5X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://torekko.com/" target="_blank">
                    {" "}
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/torekko.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Torekko</div>
                      <div className={classes.growth}>5X</div>
                    </div>
                  </a>
                </div>
              </span>
              <span>
                <div class="marquee-item">
                  <a href="https://www.beyondfinance.com/" target="_blank">
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/byn.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Beyond Finance</div>
                      <div className={classes.growth}>10X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://gravitonzero.com/" target="_blank">
                    {" "}
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/grv.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Graviton Zero</div>
                      <div className={classes.growth}>10X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://polkawar.com/" target="_blank">
                    {" "}
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/polkawar.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Polkawar</div>
                      <div className={classes.growth}>6X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://calo.run/" target="_blank">
                    {" "}
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/calo.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Calo</div>
                      <div className={classes.growth}>5X</div>
                    </div>
                  </a>
                </div>
                <div class="marquee-item">
                  <a href="https://torekko.com/" target="_blank">
                    {" "}
                    <div className={classes.itemWrapper}>
                      <div>
                        <img
                          src="/images/tokens/torekko.png"
                          className={classes.logo}
                        />
                      </div>
                      <div className={classes.title}>Torekko</div>
                      <div className={classes.growth}>5X</div>
                    </div>
                  </a>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
