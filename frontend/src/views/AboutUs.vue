<template>
<div class="AboutUs">


<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<div class="container bootdey">
<div class="row gutters">
<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
<div class="card">
<div class="card-body">
<!-- Timeline start -->
<div class="timeline">
	<div class="timeline-row">
		<div class="timeline-time">
			7:45PM<small>May 21</small>
		</div>
		<div class="timeline-dot fb-bg"></div>
		<div class="timeline-content">
			<i class="fa fa-map-marker"></i>
			<h4>Admin theme!</h4>
			<p>Milestone Admin Dashboard contains C3 graphs, flot graphs, data tables, calendar, drag &amp; drop and ion slider.</p>
			<div class="">
				<span class="badge badge-light">Design</span>
				<span class="badge badge-light">Admin</span>
			</div>
		</div>
	</div>
	<div class="timeline-row">
		<div class="timeline-time">
			8:00 AM<small>May 18</small>
		</div>
		<div class="timeline-dot green-one-bg"></div>
		<div class="timeline-content green-one">
			<i class="fa fa-warning"></i>
			<h4>Admin theme!</h4>
			<p>
				Milestone Admin Dashboard contains C3 graphs, flot graphs, data tables, calendar.
			</p>
			<div class="">
				<span class="badge badge-light">Design</span>
				<span class="badge badge-light">Admin</span>
			</div>
		</div>
	</div>
	<div class="timeline-row">
		<div class="timeline-time">
			7:25 PM<small>May 6</small>
		</div>
		<div class="timeline-dot green-two-bg"></div>
		<div class="timeline-content green-two">
			<i class="fa fa-list"></i>
			<h4>Best Admin Template!</h4>
			<p>Custom C3 graphs, Custom flot graphs, flot graphs, small graphs, Sass, profile and timeline.</p>
			<div>
				<span class="badge badge-light">Invoice</span>
				<span class="badge badge-light">Graphs</span>
			</div>
		</div>
	</div>
	<div class="timeline-row">
		<div class="timeline-time">
			3:55 PM<small>Apr 26</small>
		</div>
		<div class="timeline-dot green-three-bg"></div>
		<div class="timeline-content green-three">
			<i class="icon-directions"></i>
			<h4>Milestone Admin</h4>
			<p>
				Admin theme includes graphs, invoice, timeline, widgets, projects, calendar, components, layouts, todo's.
			</p>
			<div>
				<span class="badge badge-light">Profile</span>
				<span class="badge badge-light">Dashboard</span>
			</div>
		</div>
	</div>
	<div class="timeline-row">
		<div class="timeline-time">
			5:24 PM<small>Apr 12</small>
		</div>
		<div class="timeline-dot green-four-bg"></div>
		<div class="timeline-content green-four">
			<i class="fa fa-user"></i>
			<h4>Milestone Dashboard</h4>
			<p class="no-margin">Milestone Admin Dashboard includes invoice, profile, tasks, gallery, projects, maintanence.</p>
			<div>
				<span class="badge badge-light">Analytics</span>
				<span class="badge badge-light">Graphs</span>
			</div>
		</div>
	</div>
	<div class="timeline-row">
		<div class="timeline-time">
			11:25 AM<small>Apr 19</small>
		</div>
		<div class="timeline-dot teal-bg"></div>
		<div class="timeline-content teal">
			<i class="fa fa-coffee"></i>
			<h4>Milestone Template</h4>
			<p class="no-margin">Panels, alerts, notifications, new input styles, pricing plans, project plan, signup, login and register.</p>
			<div>
				<span class="badge badge-light">Labels</span>
				<span class="badge badge-light">Filters</span>
			</div>
		</div>
	</div>
	<div class="timeline-row">
		<div class="timeline-time">
			12:30 PM<small>May 25</small>
		</div>
		<div class="timeline-dot sea-green-bg"></div>
		<div class="timeline-content sea-green">
			<i class="fa fa-image"></i>
			<h4>Milestone dashboard</h4>
			<p>Milestone Admin Dashboard contains Ion slider, heatmap, alerts, breadcrumbs, alerts, pricing, signup, login and register.</p>
			<div>
				<span class="badge badge-light">BS 4</span>
				<span class="badge badge-light">Sass</span>
			</div>
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

</template>

<script>
import Creators from './Creators.vue'

export default {
    name: 'AboutUs',
  components: { Creators,

  },
}
</script>

<style>
.carousel {
  background-image: linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
}

body{margin-top:20px;
background:#eee;
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
    font-size: .8rem;
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
    background-image:  linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
    /* Saf4+, Chrome */
    background-image:  linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
    /* Chrome 10+, Saf5.1+, iOS 5+ */
    background-image:  linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
    /* FF3.6 */
    background-image:  linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
    /* IE10 */
    background-image:  linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
    /* Opera 11.10+ */
    background-image:  linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
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
    background-image: linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
    /* Saf4+, Chrome */
    background-image:  linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
    /* Chrome 10+, Saf5.1+, iOS 5+ */
    background-image:  linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
    /* FF3.6 */
    background-image:  linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
    /* IE10 */
    background-image: linear-gradient(180deg, rgba(116, 253, 195, 1), rgba(123, 26, 200, 1));
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