<template>
  <div>
    <section class="pb-5 bg-hero">
      <b-container class="pt-5">
        <b-row>
          <b-col cols="12" lg="6" md="6" sm="12">
            <h1 class="main-title">
              Estamos aqui <br />
              Para asesorar <br />
              Tu compra
            </h1>
            <svg
              class="my-5"
              width="487"
              height="34"
              viewBox="0 0 487 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30"
                stroke="#54BD95"
                stroke-width="8"
                stroke-linecap="round"
              />
            </svg>

            <p class="hero-description">
              Ofrecemos un asesoramiento personalizado para la correcta
              selección, compra, instalación y entrega de laptops en Uruguay 🇺🇾.
            </p>
          </b-col>
          <br class="d-none d-sm-block" />
          <b-col cols="12" lg="6" md="6" sm="12">
            <b-img
              alt="hero image"
              class="img-fluid"
              :src="require(`~/assets/img/Team_Image.jpeg`)"
            ></b-img>
          </b-col>
          <!-- <b-col cols="12" lg="12" md="12" sm="12" class="d-flex flex-column">
            <h3 class="mx-auto mt-5">
              Coordina una videollamada hoy con nosotros completando el <a href="https://docs.google.com/forms/d/e/1FAIpQLScgl21sgAbqu-6NLEnjGH_BgAEE0Suk-mPkqbrRj82OXAf8-Q/viewform?usp=sf_link">siguiente formulario</a>
            </h3>
          </b-col>

          <div class="container mt-3">
            <div class="row">
              <div class="col text-center">
                <b-button
                  href="https://docs.google.com/forms/d/e/1FAIpQLScgl21sgAbqu-6NLEnjGH_BgAEE0Suk-mPkqbrRj82OXAf8-Q/viewform?usp=sf_link"
                  class="rounded-lg ml-lg-auto text-white"
                  variant="primary"
                  size="lg"
                  >Haga click aquí para ir al formulario</b-button
                >
              </div>
            </div>
          </div> -->
        </b-row>
      </b-container>
    </section>

    <section class="bg-green-light py-5">
      <b-container>
        <b-row>
          <b-col cols="12" lg="6" md="6" sm="12">
            <h2>Como es nuestro proceso?</h2>
            <div class="my-5">
              <p class="text-muted">
                Comenzamos un formulario enfocado que nos ayuda a acelerar la
                búsqueda de laptops para darte una recomendación más rápido.
                Tomamos en cuenta tiendas Uruguayas de tecnología como
                ThotComputación, Banifox, MercadoLibre entre otros además de la
                posibilidad de importar en caso de que sea posible.
              </p>
            </div>
          </b-col>
          <b-col cols="12" lg="6" md="6" sm="12" class="mt-sm-5">
            <div class="d-flex flex-column">
              <div class="d-flex flex-row">
                <div class="d-fle align-items-start">
                  <svg
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_0_1)">
                      <rect x="9" y="5" width="60" height="60" fill="white" />
                    </g>
                    <g clip-path="url(#clip0_0_1)">
                      <path
                        d="M51.5 35H46.5L42.75 46.25L35.25 23.75L31.5 35H26.5"
                        stroke="#54BD95"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_0_1"
                        x="0"
                        y="0"
                        width="78"
                        height="78"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_1"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_1"
                          result="shape"
                        />
                      </filter>
                      <clipPath id="clip0_0_1">
                        <rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(24 20)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h5>Formulario</h5>
                  <p class="text-muted">
                    Rellenas el formulario con las características que buscas en
                    una laptop
                  </p>
                </div>
              </div>
              <div class="d-flex flex-row my-lg-5">
                <div class="d-fle align-items-start">
                  <svg
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_0_1)">
                      <rect x="9" y="5" width="60" height="60" fill="white" />
                    </g>
                    <path
                      d="M50.512 39.8626C49.7168 41.7432 48.473 43.4004 46.8894 44.6892C45.3057 45.9781 43.4305 46.8594 41.4276 47.2561C39.4247 47.6528 37.3551 47.5528 35.3997 46.9648C33.4444 46.3769 31.6628 45.3189 30.2108 43.8834C28.7588 42.4479 27.6805 40.6785 27.0703 38.73C26.4601 36.7815 26.3365 34.7132 26.7103 32.7059C27.0841 30.6986 27.9439 28.8134 29.2146 27.2151C30.4853 25.6169 32.1281 24.3542 33.9995 23.5376"
                      stroke="#54BD95"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M51.5 35C51.5 33.3585 51.1767 31.733 50.5485 30.2165C49.9203 28.6999 48.9996 27.3219 47.8388 26.1612C46.6781 25.0004 45.3001 24.0797 43.7835 23.4515C42.267 22.8233 40.6415 22.5 39 22.5V35H51.5Z"
                      stroke="#54BD95"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_d_0_1"
                        x="0"
                        y="0"
                        width="78"
                        height="78"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_1"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_1"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h5>Analisis</h5>
                  <p class="text-muted">
                    Una vez recibimos tu formulario, analizamos las opciones de
                    laptops en Uruguay y definimos una selección que
                    consideremos adecuada.
                  </p>
                </div>
              </div>
              <div class="d-flex flex-row">
                <div class="d-fle align-items-start">
                  <svg
                    width="78"
                    height="78"
                    viewBox="0 0 78 78"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_0_1)">
                      <rect x="9" y="5" width="60" height="60" fill="white" />
                    </g>
                    <path
                      d="M46.5 23.75C45.5054 23.75 44.5516 24.1451 43.8483 24.8483C43.1451 25.5516 42.75 26.5054 42.75 27.5V42.5C42.75 43.4946 43.1451 44.4484 43.8483 45.1517C44.5516 45.8549 45.5054 46.25 46.5 46.25C47.4946 46.25 48.4484 45.8549 49.1517 45.1517C49.8549 44.4484 50.25 43.4946 50.25 42.5C50.25 41.5054 49.8549 40.5516 49.1517 39.8483C48.4484 39.1451 47.4946 38.75 46.5 38.75H31.5C30.5054 38.75 29.5516 39.1451 28.8483 39.8483C28.1451 40.5516 27.75 41.5054 27.75 42.5C27.75 43.4946 28.1451 44.4484 28.8483 45.1517C29.5516 45.8549 30.5054 46.25 31.5 46.25C32.4946 46.25 33.4484 45.8549 34.1517 45.1517C34.8549 44.4484 35.25 43.4946 35.25 42.5V27.5C35.25 26.5054 34.8549 25.5516 34.1517 24.8483C33.4484 24.1451 32.4946 23.75 31.5 23.75C30.5054 23.75 29.5516 24.1451 28.8483 24.8483C28.1451 25.5516 27.75 26.5054 27.75 27.5C27.75 28.4946 28.1451 29.4484 28.8483 30.1517C29.5516 30.8549 30.5054 31.25 31.5 31.25H46.5C47.4946 31.25 48.4484 30.8549 49.1517 30.1517C49.8549 29.4484 50.25 28.4946 50.25 27.5C50.25 26.5054 49.8549 25.5516 49.1517 24.8483C48.4484 24.1451 47.4946 23.75 46.5 23.75Z"
                      stroke="#54BD95"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <defs>
                      <filter
                        id="filter0_d_0_1"
                        x="0"
                        y="0"
                        width="78"
                        height="78"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_0_1"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_0_1"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                <div>
                  <h5>Diálogo</h5>
                  <p class="text-muted">
                    Nos reunimos en una llamada en la que te mostramos la
                    selección de computadoras y conversamos hasta llegar a una
                    decisión.
                  </p>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>


      <section class="pb-5 bg-hero bg-hero-override">
      <b-container class="">
        <b-row>
          <br class="d-none d-sm-block" />

          <b-col cols="12" lg="12" md="12" sm="12" class="d-flex flex-column">
            <h3 class="mx-auto mt-5">
              Coordina una videollamada hoy con nosotros completando el <a href="https://docs.google.com/forms/d/e/1FAIpQLScgl21sgAbqu-6NLEnjGH_BgAEE0Suk-mPkqbrRj82OXAf8-Q/viewform?usp=sf_link">siguiente formulario</a>
            </h3>
          </b-col>

          <div class="container mt-5">
            <div class="row">
              <div class="col text-center">
                <b-button
                  href="https://docs.google.com/forms/d/e/1FAIpQLScgl21sgAbqu-6NLEnjGH_BgAEE0Suk-mPkqbrRj82OXAf8-Q/viewform?usp=sf_link"
                  class="rounded-lg ml-lg-auto text-white"
                  variant="primary"
                  size="lg"
                  >Haga click aquí para ir al formulario</b-button
                >
              </div>
            </div>
          </div>
        </b-row>
      </b-container>
    </section>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  components: {},
}
</script>
