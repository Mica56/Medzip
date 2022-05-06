<template>
  <div>
    <div id="about" class="AboutUs">
      <header class="masthead">
        <div class="container">
          <div class="row g-0">
            <div class="col-md">
              <img
                src="../assets/about1.png"
                class="img-fluid rounded-start"
                alt="..."
                width="1500"
                height="1500"
              />
            </div>
            <div class="col-md">
              <div class="masthead-heading text-uppercase fs-2">
                <p class="text-center">About MedZip</p>
              </div>
              <div class="masthead-subheading fs-4">
                MedZip was founded with the goal of providing technical
                solutions that would have a positive impact on the healthcare
                industry. The creators came up with the name "MedZip" as a
                trademark for the platform, which combines the terms "Medical"
                and ".zip." We have the best data secured application databases
                for the of the patients which provides a user friendly software
                to easily track medical records. We assure safety access of the
                patient of merdical professionals for their medical references
                ensured to have data access provided with verification security
                blockchain.
              </div>
              <br />
            </div>
          </div>
        </div>
      </header>

      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div class="container bootdey">
        <div class="row gutters">
          <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div class="card">
              <div class="card-body">
                <!-- Timeline start -->
                <div class="timeline">
                  <div class="timeline-row">
                    <div class="timeline-dot fb-bg"></div>
                    <div class="timeline-content">
                      <i class="fa fa-map-marker"></i>
                      <h4>Phase 1 (2022)</h4>
                      <p>Development of White paper</p>
                    </div>
                  </div>
                  <div class="timeline-row">
                    <div class="timeline-dot green-one-bg"></div>
                    <div class="timeline-content green-one">
                      <i class="fa fa-map-marker"></i>
                      <h4>Phase 2 (2022)</h4>
                      <p>
                        Development of MedZip Blockchain and Website Application
                      </p>
                    </div>
                  </div>
                  <div class="timeline-row">
                    <div class="timeline-dot green-two-bg"></div>
                    <div class="timeline-content green-two">
                      <i class="fa fa-map-marker"></i>
                      <h4>Phase 3 (2022)</h4>
                      <p>
                        Pilot testing and feedback on MedZipCustom C3 graphs,
                        Custom flot graphs, flot graphs, small graphs, Sass,
                        profile and timeline.
                      </p>
                    </div>
                  </div>
                  <div class="timeline-row">
                    <div class="timeline-dot green-three-bg"></div>
                    <div class="timeline-content green-three">
                      <i class="fa fa-map-marker"></i>
                      <h4>Phase 4 (2022)</h4>
                      <p>Feedback Assessment</p>
                    </div>
                  </div>
                  <div class="timeline-row">
                    <div class="timeline-dot green-four-bg"></div>
                    <div class="timeline-content green-four">
                      <i class="fa fa-map-marker"></i>
                      <h4>Phase 5 (2022)</h4>
                      <p class="no-margin">Enhancement and Recommendation</p>
                    </div>
                  </div>
                </div>
                <!-- Timeline end -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Creators> </Creators>
  </div>
</template>

<script>
import Creators from "./Creators.vue";

export default {
  name: "AboutUs",
  components: { Creators },
};
</script>

<style>
.carousel {
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
}

body {
  margin-top: 20px;
  background: #eee;
}
.timeline {
  position: relative;
  padding: 10px;
  margin: 0 auto;
  overflow: hidden;
  color: #ffffff;
}

.timeline:after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -1px;
  border-right: 2px dashed #c4d2e2;
  height: 100%;
  display: block;
}

.timeline-row {
  padding-left: 50%;
  position: relative;
  margin-bottom: 30px;
}

.timeline-row .timeline-time {
  position: absolute;
  right: 50%;
  top: 31px;
  text-align: right;
  margin-right: 20px;
  color: #000000;
  font-size: 1.5rem;
}

.timeline-row .timeline-time small {
  display: block;
  font-size: 0.8rem;
  color: #8796af;
}

.timeline-row .timeline-content {
  position: relative;
  padding: 20px 30px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}

.timeline-row .timeline-content:after {
  content: "";
  position: absolute;
  top: 20px;
  height: 3px;
  width: 40px;
}

.timeline-row .timeline-content:before {
  content: "";
  position: absolute;
  top: 20px;
  right: -50px;
  width: 20px;
  height: 20px;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  z-index: 100;
  background: #ffffff;
  border: 2px dashed #c4d2e2;
}

.timeline-row .timeline-content h4 {
  margin: 0 0 20px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 150%;
}

.timeline-row .timeline-content p {
  margin-bottom: 30px;
  line-height: 150%;
}

.timeline-row .timeline-content i {
  font-size: 2rem;
  color: #ffffff;
  line-height: 100%;
  padding: 10px;
  border: 2px solid #ffffff;
  -webkit-border-radius: 100px;
  -moz-border-radius: 100px;
  border-radius: 100px;
  margin-bottom: 10px;
  display: inline-block;
}

.timeline-row .timeline-content .thumbs {
  margin-bottom: 20px;
}

.timeline-row .timeline-content .thumbs img {
  margin-bottom: 10px;
}

.timeline-row:nth-child(even) .timeline-content {
  background-color: #ff5000;
  /* Fallback Color */
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
  /* Saf4+, Chrome */
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
  /* Chrome 10+, Saf5.1+, iOS 5+ */
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
  /* FF3.6 */
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
  /* IE10 */
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
  /* Opera 11.10+ */
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
  margin-left: 40px;
  text-align: left;
}

.timeline-row:nth-child(even) .timeline-content:after {
  left: -39px;
  border-right: 18px solid #ff5000;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

.timeline-row:nth-child(even) .timeline-content:before {
  left: -50px;
  right: initial;
}

.timeline-row:nth-child(odd) {
  padding-left: 0;
  padding-right: 50%;
}

.timeline-row:nth-child(odd) .timeline-time {
  right: auto;
  left: 50%;
  text-align: left;
  margin-right: 0;
  margin-left: 20px;
}

.timeline-row:nth-child(odd) .timeline-content {
  background-color: #5a99ee;
  /* Fallback Color */
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
  /* Saf4+, Chrome */
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
  /* Chrome 10+, Saf5.1+, iOS 5+ */
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
  /* FF3.6 */
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
  /* IE10 */
  background-image: linear-gradient(
    180deg,
    rgba(116, 253, 195, 1),
    rgba(123, 26, 200, 1)
  );
  /* Opera 11.10+ */
  background-image: linear-gradient(top, #1379bb, #5a99ee);
  margin-right: 40px;
  margin-left: 0;
  text-align: right;
}

.timeline-row:nth-child(odd) .timeline-content:after {
  right: -39px;
  border-left: 18px solid #1379bb;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

@media (max-width: 767px) {
  .timeline {
    padding: 15px 10px;
  }
  .timeline:after {
    left: 28px;
  }
  .timeline .timeline-row {
    padding-left: 0;
    margin-bottom: 16px;
  }
  .timeline .timeline-row .timeline-time {
    position: relative;
    right: auto;
    top: 0;
    text-align: left;
    margin: 0 0 6px 56px;
  }
  .timeline .timeline-row .timeline-time strong {
    display: inline-block;
    margin-right: 10px;
  }
  .timeline .timeline-row .timeline-icon {
    top: 52px;
    left: -2px;
    margin-left: 0;
  }
  .timeline .timeline-row .timeline-content {
    padding: 15px;
    margin-left: 56px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  .timeline .timeline-row .timeline-content:after {
    right: auto;
    left: -39px;
    top: 32px;
  }
  .timeline .timeline-row:nth-child(odd) {
    padding-right: 0;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-time {
    position: relative;
    right: auto;
    left: auto;
    top: 0;
    text-align: left;
    margin: 0 0 6px 56px;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-content {
    margin-right: 0;
    margin-left: 55px;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-content:after {
    right: auto;
    left: -39px;
    top: 32px;
    border-right: 18px solid #5a99ee;
    border-left: inherit;
  }
  .timeline.animated .timeline-row:nth-child(odd) .timeline-content {
    left: 20px;
  }
  .timeline.animated .timeline-row.active:nth-child(odd) .timeline-content {
    left: 0;
  }
}
</style>
