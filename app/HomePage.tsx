"use client";

import { FC } from "react";
import { Film } from "./_graphql/generated";
import { List } from "./_components/list/List";
import { useModalStore } from "./_store/store";
import { notificationToast } from "./_components/toast/Toast";
import Link from "next/link";
import { AddButton } from "./_components/buttons/addButton/AddButton";

type HomePageProps = {
  data: Film[];
};

type UnionPackStatus = "draft" | "approved" | "shipped";

const packStatus = new Set(["draft", "approved", "shipped"] as const);
type TypeFormSet<T extends Set<any>> = T extends Set<infer U> ? U : never;
type PackingStatus = TypeFormSet<typeof packStatus>;

const obje = { a: "a", b: "b" };

const ModalContents: FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <p>This is a sample modal contents</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, cumque
        natus aliquid officia eveniet iste consequuntur fugit nostrum,
        architecto nihil tempore rerum expedita deleniti corporis nulla.
        Pariatur, vitae? Recusandae, amet!
      </p>
    </div>
  );
};

export const HomePage: FC<HomePageProps> = ({ data }) => {
  const { openModal } = useModalStore();

  const newData = data.map((d) => {
    return { ...d, type: "film" };
  });

  return (
    <div className="p-6 mt-10">
      <Link
        href="/apply"
        className="bg-blue-300 py-2 px-8 rounded-2xl border border-blue-700"
      >
        Apply
      </Link>
      <div className="py-4">
        <AddButton />
      </div>
      <List data={newData} />
      <div className="text-purple-500 font-bold text-xl w-1/4 mx-auto">
        <div className="py-8 flex flex-col gap-8">
          <button
            className="border-purple-500 border py-2 px-6 rounded-lg"
            onClick={() => openModal(<ModalContents />)}
          >
            Open Modal
          </button>
          <button
            className="border-blue-400 rounded-md font-lg font-semibold px-6 py-1.5"
            onClick={notificationToast}
          >
            Show Toast
          </button>
        </div>
      </div>
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum asperiores
        doloribus consequuntur autem ut reprehenderit adipisci deleniti quasi,
        rem maxime architecto, minus qui eos nemo quidem minima. Blanditiis
        libero velit voluptates unde porro ut, est amet laboriosam corporis
        doloremque officia cumque, reiciendis autem quae et voluptas commodi
        praesentium. Consectetur, expedita optio possimus et debitis error a
        nesciunt beatae perspiciatis hic quam, repellendus sequi soluta, quos
        consequatur cum ullam omnis eum dolore dolores sed! Similique facilis
        sapiente molestias illum? Facilis iste dolores quo veniam officiis
        provident doloremque maiores dignissimos dicta, alias nulla amet
        corrupti? Eos eveniet adipisci doloremque! Consequuntur saepe sint
        repellendus aspernatur odit at harum delectus vitae, nesciunt quaerat
        repellat nam? Accusamus sunt saepe atque voluptas ab! Esse ducimus non
        magnam unde quod aperiam reprehenderit. Nisi itaque non voluptatibus sed
        cupiditate necessitatibus nam voluptatem accusamus repellat repudiandae
        voluptas odit quae, soluta vitae blanditiis aut quidem facilis labore,
        nobis voluptatum iusto. Rem illum quam culpa odit debitis eligendi dolor
        repellat maxime ex? Officiis repellendus illum temporibus soluta,
        perspiciatis explicabo iste cumque illo hic consequatur fuga incidunt,
        nulla doloremque delectus? Obcaecati eaque dolorum unde facilis
        recusandae? Eum iure reprehenderit, totam sed facilis non atque dicta
        eveniet eius quidem fugit similique quis cupiditate! Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Dolorum ut reprehenderit qui
        culpa nobis iusto atque nulla adipisci recusandae incidunt omnis
        molestias aliquid, nostrum similique voluptatem quis quod corporis eaque
        necessitatibus aliquam quia maxime illum facilis est? Sapiente provident
        deserunt cumque ea accusantium maiores non vero expedita, debitis
        repellendus nesciunt quos ipsa eum aliquam quis velit. Aperiam qui
        blanditiis nostrum illum voluptatum, molestiae corporis modi. Alias sit
        nemo veritatis rem facilis suscipit voluptas non officiis commodi, vero
        magnam similique saepe! Quibusdam libero odit molestias fuga. Explicabo
        hic suscipit accusamus quasi. Atque odio modi hic similique est
        voluptates eum totam quis a, dicta quos quaerat molestiae laborum
        perspiciatis! Libero quo aliquam accusantium officia corporis labore
        magni deserunt, facere eaque tempore ipsam, vero, sint error ratione
        obcaecati eius maxime sed? Sapiente minus voluptates neque alias
        assumenda quasi iste voluptatem eligendi quam iusto qui ad, architecto
        distinctio, consequatur voluptatum tempora! Consectetur eum illum beatae
        quisquam quod iusto cum. Cupiditate illum recusandae ducimus, vel
        nostrum beatae voluptates voluptatem nisi repellat? Consectetur sit
        cumque impedit consequatur ducimus laudantium beatae a vitae id labore
        nam dignissimos magni, reprehenderit rerum maxime optio quidem corporis
        ea, maiores exercitationem aliquid ipsum earum ratione natus? Deserunt
        tempore similique modi fugit assumenda vel sint sapiente magni dolore
        accusamus. Cumque fuga doloribus, consequatur repudiandae molestiae
        quisquam nulla voluptatum suscipit eius nobis sequi nostrum tempora!
        Blanditiis obcaecati tempora est esse quaerat ab excepturi repudiandae
        quasi praesentium illum, aspernatur voluptate impedit doloremque sint
        in, dignissimos velit id necessitatibus cupiditate saepe facilis, rem
        fugiat. Asperiores sequi cupiditate corrupti aspernatur, amet optio! Rem
        illum quos a ipsam numquam facere! Recusandae maxime repellendus error
        autem nobis deserunt cumque suscipit inventore corporis placeat dolores
        quidem, cupiditate quaerat natus qui voluptate enim necessitatibus
        optio, in totam aut architecto quod. Dignissimos illo aliquam eveniet!
        Iste minima a id accusamus maiores fugiat quasi, quam tempora et aut
        voluptatem mollitia quisquam ullam sed veritatis voluptate tempore.
        Labore porro ratione voluptate laboriosam, quasi facere at iusto aliquid
        saepe laborum quibusdam dicta praesentium deleniti ea numquam excepturi
        sit cum id similique eum cupiditate placeat. Consequatur quas, adipisci
        repudiandae ad sequi veritatis odit quidem eos ex debitis porro unde
        nulla ut officia quam velit corrupti recusandae sunt saepe rem harum
        eligendi animi facilis! Iste, quos ullam ut minus dolor nisi, quam
        beatae eius modi tempore pariatur odio possimus iusto porro impedit
        ratione. Unde earum soluta itaque cum necessitatibus dicta nisi
        temporibus cumque sunt, suscipit distinctio!
      </div>
    </div>
  );
};
