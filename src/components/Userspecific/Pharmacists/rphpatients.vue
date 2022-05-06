<template>
    <div >
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">New Patients</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Accepted</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Rejected</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

<table class="table">
  <thead>
    <tr>
      <th scope="col">Appointment No.</th>
      <th scope="col">Name</th>
      <th scope="col">Company</th>
      <th scope="col">Reason for consultation</th>
      <th scope="col">Appointment Date</th>
      <th scope="col">Sessions</th>
      <th scope="col">Requests</th>
      <th scope="col">Response</th>
      <th scope="col">Recommendator</th>

    </tr>
  </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>severe asthma</td>
      <td>2022-05-06</td>
      <td>1</td>
      <td>Medical Certificate</td>
      <td>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Pharmacistresponse">
           Accept
         </button>
         <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Pharmacistresponsereject">
           Reject
         </button>
      </td>
      <td>Dr. Phil</td>

    </tr>
  </tbody>
</table>

  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">

<table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Name</th>
      <th scope="col">Details</th>
      <th scope="col">Response</th>
      <th scope="col">Response date</th>
      <th scope="col">Requested files</th>
    </tr>
  </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
        <tr>
      <th scope="row"></th>
      <td></td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
   <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
  </tbody>
</table>
  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Name</th>
      <th scope="col">Details</th>
      <th scope="col">Response date</th>
      <th scope="col">Recommendation</th>
      <th scope="col">Remarks</th>
    </tr>
  </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
        <tr>
      <th scope="row"></th>
      <td></td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
   <tr>
      <th scope="row">2</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Mark</td>
    </tr>
  </tbody>
</table></div> </div>
     <Pharmacistresponsereject></Pharmacistresponsereject>
     <Pharmacistresponse></Pharmacistresponse>
</div>
</template>

<script>
import Pharmacistresponse from './pharmacistresponse.vue'
import Pharmacistresponsereject from './pharmacistresponsereject.vue'

export default {
  name: 'rphpatients',
  components: {Pharmacistresponsereject, Pharmacistresponse,

  },
}
</script>

<style>

</style>