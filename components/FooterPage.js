import React from "react";

function FooterPage() {
  return (
    <div className="bg-blue-200 p-5">
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          {/* Column-1 */}
          <div className="flex flex-col justify-items-center">
            <div>
              <span>About</span>
            </div>
            <div>
              <span>Career</span>
            </div>
            <div>
              <span>Privacy Policy</span>
            </div>
            <div>
              <span>Terms and Condition</span>
            </div>
          </div>
          {/* Column-2 */}
          <div className="flex flex-col justify-item-center">
            <div>
              <span>Resources</span>
            </div>
            <div>
              <span>Resources 1</span>
            </div>
            <div>
              <span>Resources 2</span>
            </div>
          </div>
          {/* Column-3 */}
          <div className="flex flex-col justify-item-center">
            <div>
              <span>Contact Info:</span>
            </div>
            <div>
              <span>Support: xxxxxx@xxxx.com</span>
            </div>
            <div>
              <span>Phone: 1234567890</span>
            </div>
            <div>
              <span>www.abc.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterPage;
