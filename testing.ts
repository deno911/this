import "./testing/asserts.ts";
import "./testing/bdd.ts";
import "./testing/mock.ts";
import "./testing/snapshot.ts";

// NOTE: starting in 0.160.0, chai and fastcheck have been excluded from this
// file due to their large size. if you need to use chai or fc, please import
// them from their respective files instead of the default module.
// otherwise, for example, importing ./testing.ts in a scenario where you
// only need to use some asserts, would end up weighing an extra 1.5MB+.
// As an alternative, if you **really** want to import **all** the test tools,
// you can import the new file "./testing/all.ts" instead. its huge though.
// import "./testing/chai.ts";
// import "./testing/fc.ts";
