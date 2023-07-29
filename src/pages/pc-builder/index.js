import RootLayout from "@/components/Layouts/RootLayout";
import {
  removeMonitor,
  removeMotherboard,
  removePowerSupply,
  removeProcessor,
  removeRam,
  removeStorage,
} from "@/redux/product/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import logo from "../../assets/pc-builder-logo.png";

const PcBuilderPage = () => {
  const dispatch = useDispatch();
  const { processor, motherboard, powerSupply, ram, storage, monitor } =
    useSelector((state) => state.product);
  return (
    <div className="my-8 w-full">
      <h1 className="text-5xl text-center">Build Your Pc</h1>

      <div className="flex flex-row flex-wrap justify-between mx-5 items-center my-6">
        <div>
          {processor ? (
            <div className="flex flex-row  items-center">
              <Image
                width={100}
                height={100}
                alt="processor"
                src={processor?.image}
              />
              <div className="ml-2">
                <p>{processor?.productName}</p>
                <p>Price: {processor?.price}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <Image width={60} height={60} alt="logo" src={logo} />
              <p className="ml-2 font-bold">Add Processor</p>
            </div>
          )}
        </div>
        <div>
          {processor ? (
            <button
              onClick={() => dispatch(removeProcessor())}
              className="btn btn-primary"
            >
              X
            </button>
          ) : (
            <button className="btn btn-primary w-52">
              <Link href="/pc-builder/add-processor">Add Processor</Link>
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between mx-5 items-center my-6">
        <div>
          {motherboard ? (
            <div className="flex flex-row  items-center">
              <Image
                width={100}
                height={100}
                alt="processor"
                src={motherboard?.image}
              />
              <div className="ml-2">
                <p>{motherboard?.productName}</p>
                <p>Price: {motherboard?.price}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <Image width={60} height={60} alt="logo" src={logo} />
              <p className="ml-2 font-bold">Add Motherboard</p>
            </div>
          )}
        </div>
        <div>
          {motherboard ? (
            <button
              onClick={() => dispatch(removeMotherboard())}
              className="btn btn-primary"
            >
              X
            </button>
          ) : (
            <button className="btn btn-primary w-52">
              <Link href="/pc-builder/add-motherboard">Add Motherboard</Link>
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between mx-5 items-center my-6">
        <div>
          {powerSupply ? (
            <div className="flex flex-row  items-center">
              <Image
                width={100}
                height={100}
                alt="processor"
                src={powerSupply?.image}
              />
              <div className="ml-2">
                <p>{powerSupply?.productName}</p>
                <p>Price: {powerSupply?.price}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <Image width={60} height={60} alt="logo" src={logo} />
              <p className="ml-2 font-bold">Add Power Supply</p>
            </div>
          )}
        </div>
        <div>
          {powerSupply ? (
            <button
              onClick={() => dispatch(removePowerSupply())}
              className="btn btn-primary"
            >
              X
            </button>
          ) : (
            <button className="btn btn-primary w-52">
              <Link href="/pc-builder/add-powersupply">Add Power Unit</Link>
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-row flex-wrap  justify-between mx-5 items-center my-6">
        <div>
          {ram ? (
            <div className="flex flex-row  items-center">
              <Image
                width={100}
                height={100}
                alt="processor"
                src={ram?.image}
              />
              <div className="ml-2">
                <p>{ram?.productName}</p>
                <p>Price: {ram?.price}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <Image width={60} height={60} alt="logo" src={logo} />
              <p className="ml-2 font-bold">Add Ram</p>
            </div>
          )}
        </div>
        <div>
          {ram ? (
            <button
              onClick={() => dispatch(removeRam())}
              className="btn btn-primary"
            >
              X
            </button>
          ) : (
            <button className="btn btn-primary w-52">
              <Link href="/pc-builder/add-ram">Add Ram</Link>
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-row flex-wrap  justify-between mx-5 items-center my-6">
        <div>
          {storage ? (
            <div className="flex flex-row  items-center">
              <Image
                width={100}
                height={100}
                alt="processor"
                src={storage?.image}
              />
              <div className="ml-2">
                <p>{storage?.productName}</p>
                <p>Price: {storage?.price}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <Image width={60} height={60} alt="logo" src={logo} />
              <p className="ml-2 font-bold">Add Storage</p>
            </div>
          )}
        </div>
        <div>
          {storage ? (
            <button
              onClick={() => dispatch(removeStorage())}
              className="btn btn-primary"
            >
              X
            </button>
          ) : (
            <button className="btn btn-primary w-52">
              <Link href="/pc-builder/add-storage">Add Storage</Link>
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between mx-5 items-center my-6">
        <div>
          {monitor ? (
            <div className="flex flex-row  items-center">
              <Image
                width={100}
                height={100}
                alt="processor"
                src={monitor?.image}
              />
              <div className="ml-2">
                <p>{monitor?.productName}</p>
                <p>Price: {monitor?.price}</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-row items-center">
              <Image width={60} height={60} alt="logo" src={logo} />
              <p className="ml-2 font-bold">Add Monitor</p>
            </div>
          )}
        </div>
        <div>
          {monitor ? (
            <button
              onClick={() => dispatch(removeMonitor())}
              className="btn btn-primary"
            >
              X
            </button>
          ) : (
            <button className="btn btn-primary w-52">
              <Link href="/pc-builder/add-monitor">Add Monitor</Link>
            </button>
          )}
        </div>
      </div>
      <div className="text-center my-4">
        {processor &&
          motherboard &&
          powerSupply &&
          ram &&
          storage &&
          monitor && (
            <button className="btn btn-primary">Complete Pc Build</button>
          )}
      </div>
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
