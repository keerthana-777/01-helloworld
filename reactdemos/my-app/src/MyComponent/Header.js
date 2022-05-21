import React from "react";

export default function Header() {
  return (
    <form method="" action="" name="reg_form" onsubmit="return validate()">
      <h2>Registration Form</h2>
      <table>
        <tr>
          <td>
            <label>First Name: </label>
          </td>
          <td>
            <input type="text" name="fname" placeholder="First Name" />
          </td>
        </tr>
        <td>
          <label>Last Name: </label>
        </td>
        <tr>
          <td>
            <input type="text" name="lname" placeholder="Last Name" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Address: </label>
          </td>
          <td>
            <input
              type="textarea"
              size="50"
              name="address"
              placeholder="Address"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Gender: </label>
          </td>
          <td>
            <input type="radio" name="gender" value="male">
              Male
            </input>
            <input type="radio" name="gender" value="femele">
              Female
            </input>
          </td>
        </tr>
        <tr>
          <td>
            <label>Email Id: </label>
          </td>
          <td>
            <input type="text" name="email" placeholder="example@gmail.com" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Mobile: </label>
          </td>
          <td>
            <input type="number" name="mobile" />
          </td>
        </tr>
        <tr>
          <td>
            <label>Course: </label>
          </td>
          <td>
            <select name="course">
              <option value="select course">select course</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="JavaScript">JAVASCRIPT</option>
              <option value="Java">JAVA</option>
            </select>
          </td>
        </tr>
        <tr>
          <td>
            <input type="submit" name="submit" value="Submit" />
            <input type="reset" name="reset" value="Reset" />
          </td>
        </tr>
      </table>
    </form>
  );
}
