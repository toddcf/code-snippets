# Form

According to Simple Steps JavaScript, you should put your `<input>` *inside* of your `<label>`. This allows the user to click on the entire label rather than just the tiny checkbox:

```
<label>
	<input type="checkbox">
	Check This
</label>
```


## A Different Example

```
<form method="post" action="#" class="contact-form">
				
	<!-- NAME -->
	<div class="row">
		<div class="col span-1-of-3">
			<label for="first-name">First Name</label>
		</div>
		<div class="col span-2-of-3">
			<input type="text" name="first-name" id="first-name" placeholder="First Name" required>
		</div>
	</div>
	<div class="row">
		<div class="col span-1-of-3">
			<label for="last-name">Last Name</label>
		</div>
		<div class="col span-2-of-3">
			<input type="text" name="last-name" id="last-name" placeholder="Last Name" required>
		</div>
	</div>

	<!-- EMAIL -->
	<div class="row">
		<div class="col span-1-of-3">
			<label for="email">Email</label>
		</div>
		<div class="col span-2-of-3">
			<input type="email" name="email" id="email" placeholder="Your Email" required>
		</div>
	</div>

	<!-- HOW DID YOU FIND US? -->
	<div class="row">
		<div class="col span-1-of-3">
			<label for="find-us">How Did You Find Us?</label>
		</div>
		<div class="col span-2-of-3">
			<select name="find-us" id="find-us">
				<option value="friends" selected>Friends</option>
				<option value="search">Search Engine</option>
				<option value="ad">Advertisement</option>
				<option value="other">Other</option>
			</select>
		</div>
	</div>

	<!-- NEWSLETTER -->
	<div class="row">
		<div class="col span-1-of-3">
			<label for="news">Newsletter?</label>
		</div>
		<div class="col span-2-of-3">
			<input type="checkbox" name="news" id="news" checked>Yes, please!
		</div>
	</div>

	<!-- MESSAGE -->
	<div class="row">
		<div class="col span-1-of-3">
			<label for="message">Drop Us A Line:</label>
		</div>
		<div class="col span-2-of-3">
			<textarea name="message" placeholder="Your Message"></textarea>
		</div>
	</div>

	<!-- SUBMIT -->
	<div class="row">
		<div class="col span-1-of-3">
			<label>&nbsp;</label> <!-- Blank space to keep button aligned with input fields. -->
		</div>
		<div class="col span-2-of-3">
			<input type="submit" value="Send">
		</div>
	</div>

</form>
```