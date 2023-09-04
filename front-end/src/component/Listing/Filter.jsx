import React,{useState} from "react";

const Filter = () => {

    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const toggleFilter = () => {
      setIsFilterVisible(!isFilterVisible);
      // Hide the search section if it's currently visible
      if (isSearchVisible) {
        setIsSearchVisible(false);
      }
    };

    const toggleSearch = () => {
      setIsSearchVisible(!isSearchVisible);
      // Hide the filter section if it's currently visible
      if (isFilterVisible) {
        setIsFilterVisible(false);
      }
  };
  

  return (
    <>
    
      <section className="bg0">
        <div className="Fcontainer">
          <div className="p-b-10">
            <h3>Image Collections</h3>
          </div>
          <div className="flex-w flex-sb-m p-b-52">
            <div className="flex-w flex-c-m m-tb-10" onClick={toggleFilter}>
              <div className="flex-c-m cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter">
                <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list" />
                <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                Filter
              </div>
              <div className="flex-c-m cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search" onClick={toggleSearch}>
                <i className="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search" />
                <i className="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none" />
                Search
              </div>
            </div>

            {/* Search product */}
            <div className={`panel-search w-full p-t-10 ${isSearchVisible ? "" : "dis-none"}`}>
              <div className="bor8 dis-flex p-l-15">
                <button className="size-113 flex-c-m fs-16 cl2 hov-cl1 trans-04">
                  <box-icon name="search"></box-icon>
                </button>
                <input
                  className="mtext-107 cl2 size-114 plh2 p-r-15"
                  type="text"
                  name="search-product"
                  placeholder="Search"
                />
              </div>
            </div>
            {/* Filter */}
            <div className={`panel-filter w-full p-t-10 ${isFilterVisible ? "" : "dis-none"}`}>
              <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                <div className="filter-col1 p-r-15 p-b-27">
                  <div className="cl2 p-b-15">Sort By</div>
                  <ul>
                    <li className="p-b-6">
                      <a href="#" className="filter-link trans-04">
                        Default
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link trans-04">
                        Newest
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link trans-04">
                        Size: Low to High
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link trans-04">
                        Size: High to Low
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="filter-col2 p-r-15 p-b-27">
                  <div className="cl2 p-b-15">Dimensions</div>
                  <ul>
                    <li className="p-b-6">
                      <a
                        href="#"
                        className="filter-link trans-04 filter-link-active"
                      >
                        All
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link trans-04">
                        100x100 - 150x150
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link trans-04">
                        300x200 - 800x600
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link trans-04">
                        400x400 - 800x800
                      </a>
                    </li>
                    <li className="p-b-6">
                      <a href="#" className="filter-link trans-04">
                        1200x630 - 1920x400
                      </a>
                    </li>

                    <li className="p-b-6">
                      <a href="#" className="filter-link trans-04">
                        3000x3000 +
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="filter-col3 p-r-15 p-b-27">
                  <div className="cl2 p-b-15">Color Palette</div>
                  <ul>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#222" }}
                      >
                        O
                      </span>
                      <a href="#" className="filter-link trans-04">
                        Monochromatic Palette:
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#4272d7" }}
                      >
                        O
                      </span>
                      <a
                        href="#"
                        className="filter-link trans-04 filter-link-active"
                      >
                        Complementary Palette:
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#b3b3b3" }}
                      >
                        O
                      </span>
                      <a href="#" className="filter-link trans-04">
                        Analogous Palette:
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#00ad5f" }}
                      >
                        O
                      </span>
                      <a href="#" className="filter-link trans-04">
                        Triadic Palette:
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#fa4251" }}
                      >
                        O
                      </span>
                      <a href="#" className="filter-link trans-04">
                        Pastel Palette:
                      </a>
                    </li>
                    <li className="p-b-6">
                      <span
                        className="fs-15 lh-12 m-r-6"
                        style={{ color: "#aaa" }}
                      >
                        O
                      </span>
                      <a href="#" className="filter-link trans-04">
                        Earth-Tone Palette:
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="filter-col4 p-b-27">
                  <div className="cl2 p-b-15">Tags</div>
                  <div className="flex-w p-t-4 m-r--5">
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Nature
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Travel
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      People
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Events
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Food and Drink
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Technology
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Fashion
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Animals
                    </a>

                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Art and Creativity
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Health and Wellness
                    </a>
                    <a
                      href="#"
                      className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5"
                    >
                      Sports
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Filter;
