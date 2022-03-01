<template>
<div class="d-flex flex-column h-100">

  <!-- FOOTER -->
    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">MedZip.</h5>
                    <p class="small text-muted">Medzip is a platform for patients, healthcare providers, and health care companies to utilize the safety and security of blockchain database</p>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                </div>
     
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Quick links</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="/">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="partners">Partners</a></li>
                        <li><a href="providers">Providers</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Contact Us</h5>
                    <p class="small text-muted">MedZipUMAK@gmail.com</p>
                    <form action="#">
                    </form>
                </div>
            </div>
        </div>
    </footer>
</div>
</template>
<script>
  export default {
    name: 'Footer',
    components: {
    }
  }
</script>

<style>
body {
  background-image:white ;
}

.text-small {
  font-size: 0.9rem;
}

a {
  color: inherit;
  text-decoration: none;
  transition: all 0.3s;
}

a:hover, a:focus {
  text-decoration: none;
}

.form-control {
  background: #212529;
  border-color: #545454;
}

.form-control:focus {
  background: #212529;
}

footer {
  background: #212529;
}

</style>