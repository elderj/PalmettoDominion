import React, { Fragment } from "react";
import { Button, Form, Input } from "antd";
class ContactPage extends React.Component {
  render() {
    return (
      <Fragment>
        <br />
        <div className="Aligner">
          <div className="Aligner-item">
            <h1 className="font-actionj">What's Up?</h1>
          </div>
          <br />
        </div>

        <div className="Aligner">
          <div
            className="Aligner-item"
            style={{
              backgroundColor: "#F0F0F0",
              width: "400vw",
              borderRadius: "25px",
              padding: "8px"
            }}
          >
            <div
              className="Aligner"
              style={{
                backgroundColor: "#fff",

                borderRadius: "20px",
                padding: "8px"
              }}
            >
              <Form>
                <br />

                <p style={{ padding: "2vw" }}>
                  Have some questions regarding hot sauce or peppers? Got a
                  suggestion of how this site could be better? Want to become a
                  contributor? Shoot us an email and let us know!
                </p>
                <Form.Item>
                  <Input addonBefore="Your Name" placeholder="Name" />
                </Form.Item>
                <Form.Item>
                  <Input addonBefore="Your Email" placeholder="Your Email" />
                </Form.Item>
                <Form.Item>
                  <Input addonBefore="  Subject " placeholder="Subject" />
                </Form.Item>
                <Form.Item>
                  <Input.TextArea addonBefore="Message" placeholder="Message" />
                </Form.Item>
                <Button>Submit</Button>
              </Form>
            </div>
          </div>
        </div>
        <br />
      </Fragment>
    );
  }
}

export default ContactPage;
