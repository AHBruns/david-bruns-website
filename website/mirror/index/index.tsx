import * as layout from "../../components/layout";
import * as newsletters from "../../components/newsletters";
import * as splash from "../../components/splash";
import * as option from "fp-ts/Option";

const Index = () => {
  return (
    <layout.Layout>
      <div className="absolute inset-0 overflow-y-auto">
        <splash.Splash
          title="David Bruns"
          subtitle={option.none}
          src="https://david-bruns-website.vercel.app/_next/image?url=https%3A%2F%2Fmedia.wired.com%2Fphotos%2F5a593a7ff11e325008172bc2%2F191%3A100%2Fw_2400%2Ch_1256%2Cc_limit%2Fpulsar-831502910.jpg&w=2048&q=75"
        />
        <newsletters.Strip
          layout="LEFT_TO_RIGHT"
          src="https://pbs.twimg.com/media/DYGXMmEVoAAHG1n.jpg:large"
        >
          <newsletters.Details
            title="Military Thrillers Newsletter"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non."
            onSubmit={() => alert("awaiting implementation")}
          />
        </newsletters.Strip>
        <newsletters.Strip
          layout="RIGHT_TO_LEFT"
          src="https://i.pinimg.com/736x/92/81/d9/9281d91c1f1587f992d9056658e83d91--worms-dune.jpg"
        >
          <newsletters.Details
            title="Science Fiction Newsletter"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna fringilla urna porttitor rhoncus dolor purus non."
            onSubmit={() => alert("awaiting implementation")}
          />
        </newsletters.Strip>
      </div>
    </layout.Layout>
  );
};

export default Index;
