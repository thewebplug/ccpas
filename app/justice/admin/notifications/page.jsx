"use client"
export default function Notifications() {
  return (
    <div className="notifications">
      <div className="notifications__perf">
        <div>
          <div>Notifications</div>
          <div>
            Choose your preferred method and timing for notifications.pdate your
            photo and personal details here.
          </div>
        </div>
        <div>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>

      <div className="notifications__notif">
        <div className="notifications__notif__card1">
<div>General Notification</div>
<div>Select when you'll be notified of the following changes.</div>
        </div>
        <div className="notifications__notif__card2">
        <div className="notifications__notif__card2__inner">
        <div>I’m mentioned in a message</div>
        <div>
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>
            </div>
        <div className="notifications__notif__card2__inner">
        <div>Received an email</div>
        <div>
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>
            </div>
        <div className="notifications__notif__card2__inner">
        <div>Received a chat message</div>
        <div>
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>
            </div>
        <div className="notifications__notif__card2__inner">
        <div>Assigned a case</div>
        <div>
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>
            </div>
        <div className="notifications__notif__card2__inner">
        <div>Case status update</div>
        <div>
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>
            </div>
        <div className="notifications__notif__card2__inner">
        <div>I’m mentioned in a message</div>
        <div>
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>
            </div>
        
        </div>
      </div>

      <div className="notifications__button-group">
        <button>Cancel</button>
        <button
        onClick={() => window.location.href = "/justice/admin/notification-settings"}
        >Save</button>
      </div>
    </div>
  );
}
