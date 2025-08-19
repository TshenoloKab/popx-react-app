import pic20 from '../assets/pic20.jpg';

export default function AccountSettings() {
  return (
    <div className="account-settings-card">
      {/* Header */}
      <div className="account-settings-header">
        <h2>Account Settings</h2>
      </div>

      {/* Body */}
      <div className="account-settings-body">
        <div className="profile-section">
          <img src={pic20} alt="profile" className="profile-pic" />
          <div className="balance">
            <h4>Marry Doe</h4>
            <p>Marry@gmail.com</p>
          </div>
        </div>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          blandit nisl vitae ligula fermentum, vitae ultrices nisl luctus.
        </p>

        <hr className="line" />
      </div>
    </div>
  );
}
