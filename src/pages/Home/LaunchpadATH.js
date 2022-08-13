import { Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
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
    <div>
      <div class="marquee-wrapper ">
        <div class="marquee-block">
          <div class="marquee-inner to-left">
            <span>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/alphadex.jpg"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>AlphaDex</div>
                  <div className={classes.growth}>500X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/pixelverse.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>PixelVerse</div>
                  <div className={classes.growth}>86X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/peoplez.svg"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>PeopleZ</div>
                  <div className={classes.growth}>50X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/defactor.svg"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Defactor</div>
                  <div className={classes.growth}>30X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/playmon.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>PlayerMon</div>
                  <div className={classes.growth}>30X</div>
                </div>
              </div>
            </span>
            <span>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/alphadex.jpg"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>AlphaDex</div>
                  <div className={classes.growth}>500X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/pixelverse.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>PixelVerse</div>
                  <div className={classes.growth}>86X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/peoplez.svg"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>PeopleZ</div>
                  <div className={classes.growth}>50X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/defactor.svg"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Defactor</div>
                  <div className={classes.growth}>30X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/playmon.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>PlayerMon</div>
                  <div className={classes.growth}>30X</div>
                </div>
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
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/playmon.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title} style={{ fontSize: 12 }}>
                    Animal Concerts
                  </div>
                  <div className={classes.growth}>20X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/widiland.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>WidiLand</div>
                  <div className={classes.growth}>20X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/tryhards.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Try Hards</div>
                  <div className={classes.growth}>20X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/playmon.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>PlayerMon</div>
                  <div className={classes.growth}>30X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/shoefy.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Shoefy</div>
                  <div className={classes.growth}>10X</div>
                </div>
              </div>
            </span>
            <span>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/playmon.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title} style={{ fontSize: 12 }}>
                    Animal Concerts
                  </div>
                  <div className={classes.growth}>20X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/widiland.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>WidiLand</div>
                  <div className={classes.growth}>20X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/tryhards.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Try Hards</div>
                  <div className={classes.growth}>20X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/playmon.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>PlayerMon</div>
                  <div className={classes.growth}>30X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/shoefy.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Shoefy</div>
                  <div className={classes.growth}>10X</div>
                </div>
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
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/byn.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Beyond Finance</div>
                  <div className={classes.growth}>10X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/grv.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Graviton Zero</div>
                  <div className={classes.growth}>10X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/polkawar.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Polkawar</div>
                  <div className={classes.growth}>6X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/calo.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Calo</div>
                  <div className={classes.growth}>5X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/torekko.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Torekko</div>
                  <div className={classes.growth}>5X</div>
                </div>
              </div>
            </span>
            <span>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/byn.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Beyond Finance</div>
                  <div className={classes.growth}>10X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/grv.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Graviton Zero</div>
                  <div className={classes.growth}>10X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/polkawar.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Polkawar</div>
                  <div className={classes.growth}>6X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/calo.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Calo</div>
                  <div className={classes.growth}>5X</div>
                </div>
              </div>
              <div class="marquee-item">
                <div className={classes.itemWrapper}>
                  <div>
                    <img
                      src="https://launchpad.polkabridge.org/img/tokens/torekko.png"
                      className={classes.logo}
                    />
                  </div>
                  <div className={classes.title}>Torekko</div>
                  <div className={classes.growth}>5X</div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
