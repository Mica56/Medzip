<template>
    <div >
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="providers-tab" data-bs-toggle="tab" data-bs-target="#providers" type="button" role="tab" aria-controls="providers" aria-selected="true">Provider Findings</button>
  </li>
    <li class="nav-item" role="presentation">
    <button class="nav-link " id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">Provider requests</button>
  </li>
  
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Accepted</button>
  </li>
  
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Rejected</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">

    <div class="tab-pane fade show active" id="providers" role="tabpanel" aria-labelledby="providers-tab">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Provider</th>
      <th scope="col">Company</th>
      <th scope="col">Recommendation</th>
      <th scope="col">Summary</th>
      <th scope="col">Explanation</th>
      <th scope="col">FIles</th>
      <th scope="col">Recommendation to</th>
    </tr>
  </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
  </div>

  <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Provider</th>
      <th scope="col">Company</th>
      <th scope="col">Recommendation</th>
      <th scope="col">Summary</th>
      <th scope="col">Explanation</th>
      <th scope="col">FIles</th>
      <th scope="col">Response</th>
      <th scope="col">Recommendation to</th>
    </tr>
  </thead>
    <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
        <button type="button" class="btn btn-primary">
           Accept
         </button>
         <button type="button" class="btn btn-primary">
           Reject
         </button>
      </td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
  </div>


  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
<table class="table">
  <thead>
    <tr>
      <th scope="col">Date</th>
      <th scope="col">Provider</th>
      <th scope="col">Recommendation</th>
      <th scope="col">Recommended Provider</th>
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
      <th scope="col">Provider</th>
      <th scope="col">Recommendation</th>
      <th scope="col">Recommended Provider</th>
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

</div>
 
</div>
</template>

<script>

export default {
  name: 'rphpatients',
  components: {

  },
}
</script>

<style>

</style>