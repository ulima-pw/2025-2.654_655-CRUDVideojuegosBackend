--
-- PostgreSQL database dump
--

\restrict Py8ogghIQD0YqrC0NGXJJdyWMbeB9Jen4DWu2tqLdagSebETLRcdkbPY617EUDp

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

-- Started on 2025-11-26 11:28:55

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4940 (class 0 OID 16681)
-- Dependencies: 221
-- Data for Name: Categoria; Type: TABLE DATA; Schema: public; Owner: videojuegos
--

INSERT INTO public."Categoria" VALUES ('e412e1bb-7990-48f7-a6ee-0885fb15c64a', 'RPG');
INSERT INTO public."Categoria" VALUES ('a677fbb8-080f-4154-a714-045f1f4c746e', 'Acción');
INSERT INTO public."Categoria" VALUES ('d728a4bd-ed74-460e-9e97-bf435c2f2a8d', 'Deportes');
INSERT INTO public."Categoria" VALUES ('5b4e32bf-3a73-45b5-8862-91e24d077247', 'FPS');


--
-- TOC entry 4938 (class 0 OID 16501)
-- Dependencies: 219
-- Data for Name: Usuario; Type: TABLE DATA; Schema: public; Owner: videojuegos
--



--
-- TOC entry 4939 (class 0 OID 16508)
-- Dependencies: 220
-- Data for Name: Perfil; Type: TABLE DATA; Schema: public; Owner: videojuegos
--



--
-- TOC entry 4941 (class 0 OID 16797)
-- Dependencies: 222
-- Data for Name: Plataforma; Type: TABLE DATA; Schema: public; Owner: videojuegos
--

INSERT INTO public."Plataforma" VALUES ('6bbc3087-b082-4402-940d-ebc152d11e7a', 'PS5');
INSERT INTO public."Plataforma" VALUES ('7f5b922d-69d3-4ee8-b1dd-179fbde74f54', 'Switch 2');
INSERT INTO public."Plataforma" VALUES ('2a1a12c0-970e-4919-9b28-f66646bd6601', 'PC');


--
-- TOC entry 4937 (class 0 OID 16463)
-- Dependencies: 218
-- Data for Name: Videojuego; Type: TABLE DATA; Schema: public; Owner: videojuegos
--

INSERT INTO public."Videojuego" VALUES ('125b5cb8-6f48-4481-a7b1-0a7deb8ae377', 'EA FC 2026', '2025-11-17 17:24:32.17', 'Nuevo', 'd728a4bd-ed74-460e-9e97-bf435c2f2a8d');
INSERT INTO public."Videojuego" VALUES ('d4333a34-1611-495e-b9e7-96feba32712d', 'Final Fantasy', '2025-11-17 17:38:14.188', 'Nuevo', 'e412e1bb-7990-48f7-a6ee-0885fb15c64a');
INSERT INTO public."Videojuego" VALUES ('a03b0c57-2ef2-44cb-a6c3-81f2f5f60f6b', 'AAAA', '2025-11-19 17:44:59.086', 'Nuevo', 'e412e1bb-7990-48f7-a6ee-0885fb15c64a');
INSERT INTO public."Videojuego" VALUES ('1a3d064f-f79c-4960-a500-5b1cd1b7cdbe', 'GTA5', '2025-11-19 17:51:01.389', 'Usado', 'a677fbb8-080f-4154-a714-045f1f4c746e');


--
-- TOC entry 4942 (class 0 OID 16804)
-- Dependencies: 223
-- Data for Name: _Videojuego_Plataforma; Type: TABLE DATA; Schema: public; Owner: videojuegos
--

INSERT INTO public."_Videojuego_Plataforma" VALUES ('6bbc3087-b082-4402-940d-ebc152d11e7a', 'd4333a34-1611-495e-b9e7-96feba32712d');
INSERT INTO public."_Videojuego_Plataforma" VALUES ('2a1a12c0-970e-4919-9b28-f66646bd6601', 'd4333a34-1611-495e-b9e7-96feba32712d');
INSERT INTO public."_Videojuego_Plataforma" VALUES ('7f5b922d-69d3-4ee8-b1dd-179fbde74f54', '125b5cb8-6f48-4481-a7b1-0a7deb8ae377');
INSERT INTO public."_Videojuego_Plataforma" VALUES ('2a1a12c0-970e-4919-9b28-f66646bd6601', '125b5cb8-6f48-4481-a7b1-0a7deb8ae377');


--
-- TOC entry 4936 (class 0 OID 16454)
-- Dependencies: 217
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: videojuegos
--

INSERT INTO public._prisma_migrations VALUES ('bbfcf50b-7c6a-4428-b743-7bd4db3afbd4', 'b19820b68efb63256bdba5311f87a0f1f5ce36a4db73a51607236e15971ea24d', '2025-11-12 11:57:01.94287-05', '20251112165701_init', NULL, NULL, '2025-11-12 11:57:01.935057-05', 1);
INSERT INTO public._prisma_migrations VALUES ('c85e1c69-2753-4d82-a284-9d92a5b5e1c3', '02c363e3ba5d7d1d73330d8fb5a4d942bb4921db975de7eb6693d7b9e4652caa', '2025-11-17 10:59:52.439499-05', '20251117155952_uno_uno', NULL, NULL, '2025-11-17 10:59:52.352191-05', 1);
INSERT INTO public._prisma_migrations VALUES ('20335279-c67a-4fb7-b7e1-51f84c0faeae', 'cc9f832bcb973a1983f5d13d07d45c498e2b6cd57f070f6540bb27cfbcbd1b00', '2025-11-17 11:30:14.800941-05', '20251117163014_uno_muchos', NULL, NULL, '2025-11-17 11:30:14.771929-05', 1);
INSERT INTO public._prisma_migrations VALUES ('82d67344-bb57-403f-a79b-37522df9280b', '8bd25c7c6b08cb1c9008343141c8d47c0a7f72ee01bbfd86130d2693a4a463b8', '2025-11-19 11:32:13.851781-05', '20251119163213_muchos_muchos', NULL, NULL, '2025-11-19 11:32:13.783671-05', 1);


-- Completed on 2025-11-26 11:28:56

--
-- PostgreSQL database dump complete
--

\unrestrict Py8ogghIQD0YqrC0NGXJJdyWMbeB9Jen4DWu2tqLdagSebETLRcdkbPY617EUDp

