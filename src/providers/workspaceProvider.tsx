import { createContext, useContext } from "react";
import {
  Program,
  AnchorProvider,
  Idl,
  setProvider,
} from "@project-serum/anchor";
import { Connection } from "@solana/web3.js";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
// import { PROGRAM_ID } from "../util/constants";
import { Keypair } from "@solana/web3.js";
// import { PROGRAM_ID } from "../util/constants";

const WorkspaceContext = createContext({});

interface Workspace {
  connection?: Connection;
  provider?: AnchorProvider;
  // program?: Program<Program>;
}

const WorkspaceProvider = ({ children }: any) => {
  const wallet = useAnchorWallet() || MockWallet;
  const { connection } = useConnection();

  const provider = new AnchorProvider(connection, wallet, {});
  setProvider(provider);

  // const program = new Program(
  //   programIdl as Idl,
  //   PROGRAM_ID
  // );
  const workspace = {
    connection,
    provider,
    // program,
  };

  return (
    <WorkspaceContext.Provider value={workspace}>
      {children}
    </WorkspaceContext.Provider>
  );
};

const useWorkspace = (): Workspace => {
  return useContext(WorkspaceContext);
};

const MockWallet = {
  publicKey: Keypair.generate().publicKey,
  signTransaction: () => Promise.reject(),
  signAllTransactions: () => Promise.reject(),
};

export { WorkspaceProvider, useWorkspace };
